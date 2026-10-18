import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const rootDir = process.cwd();
const themeDir = path.join(rootDir, "wordpress-theme", "avr-web-consulting");
const publicDir = path.join(rootDir, "public");
const downloadsDir = path.join(publicDir, "downloads");

console.log("--- Packaging AVR Web Consulting WordPress Theme ---");

// 1. Ensure directories exist
fs.mkdirSync(path.join(themeDir, "assets", "css"), { recursive: true });
fs.mkdirSync(path.join(themeDir, "assets", "js"), { recursive: true });
fs.mkdirSync(path.join(themeDir, "public"), { recursive: true });
fs.mkdirSync(downloadsDir, { recursive: true });

// 2. Compile Tailwind CSS for theme with full source scanning of both wordpress-theme and src
const themeCssFile = path.join(themeDir, "assets", "css", "main.css");
console.log("Compiling Tailwind CSS with @source wordpress-theme & @source src...");
const tempInputCss = path.join(rootDir, "temp-theme-tailwind-input.css");
try {
  fs.writeFileSync(
    tempInputCss,
    `@import "./src/styles.css";
@source "./wordpress-theme";
@source "./src";
`
  );

  execSync(`npx @tailwindcss/cli -i "${tempInputCss}" -o "${themeCssFile}" --minify`, {
    stdio: "inherit",
  });
  console.log("Tailwind CSS successfully compiled into assets/css/main.css");
} catch (err) {
  console.warn("Tailwind CLI compilation warning:", err.message);
} finally {
  if (fs.existsSync(tempInputCss)) {
    fs.unlinkSync(tempInputCss);
  }
}

// Ensure root assets folder does not exist to prevent Nitro from treating it as server virtual asset
if (fs.existsSync(path.join(rootDir, "assets"))) {
  fs.rmSync(path.join(rootDir, "assets"), { recursive: true, force: true });
}

// 3. Sync theme files from themeDir to rootDir for backwards compatibility
const themeFiles = fs.readdirSync(themeDir);
for (const file of themeFiles) {
  if (file.endsWith(".php") || file === "style.css" || file === "readme.txt") {
    fs.copyFileSync(path.join(themeDir, file), path.join(rootDir, file));
    console.log(`Synced theme/${file} -> ${file}`);
  }
}

// 4. Copy logo, video, and imagery assets to theme root and public/
const publicAssets = [
  "1790648464804.png",
  "whatsapp-logo.png",
  "image1.jpg",
  "image2.jpeg",
  "avr.mp4",
  "favicon.ico",
  "favicon.png",
];
for (const asset of publicAssets) {
  const src = path.join(publicDir, asset);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(themeDir, "public", asset));
    fs.copyFileSync(src, path.join(themeDir, asset));
    console.log(`Copied asset: ${asset} to theme`);
  }
}

// 5. Generate optimized screenshot.png for WordPress Appearance Themes menu (1200x900)
try {
  const sharp = (await import("sharp")).default;
  const imageSrc = path.join(rootDir, "image1.jpg");
  if (fs.existsSync(imageSrc)) {
    await sharp(imageSrc)
      .resize(1200, 900, { fit: "cover" })
      .png({ compressionLevel: 9, palette: true, quality: 80 })
      .toFile(path.join(themeDir, "screenshot.png"));
    fs.copyFileSync(path.join(themeDir, "screenshot.png"), path.join(rootDir, "screenshot.png"));
    console.log("Generated optimized screenshot.png (1200x900) for WordPress theme");
  }
} catch (err) {
  console.log("Sharp screenshot generation fallback:", err.message);
  if (fs.existsSync(path.join(rootDir, "image1.jpg"))) {
    fs.copyFileSync(path.join(rootDir, "image1.jpg"), path.join(themeDir, "screenshot.png"));
    fs.copyFileSync(path.join(rootDir, "image1.jpg"), path.join(rootDir, "screenshot.png"));
  }
}

// 6. Create WordPress Theme readme.txt
const readmeContent = `=== AVR Web Consulting ===
Contributors: avrwebconsulting
Requires at least: 6.0
Tested up to: 6.7
Requires PHP: 7.4
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

== Description ==
Modern, high-performance WordPress theme for AVR Web Consulting - Digital Marketing, AI SEO, GEO, AEO, LLMO, and Web Development agency. Fully responsive, customizable, and perfectly matched with the codebase.

== Installation ==
1. In your WordPress admin, go to Appearance > Themes.
2. Click "Add New Theme" and then click "Upload Theme".
3. Choose the "avr-web-consulting.zip" file and click "Install Now".
4. After installation, click "Activate".
5. Customize your company phone, email, WhatsApp, and office address under Appearance > Customize > AVR Theme Customizer.

== Features ==
- Bulletproof logo sizing: Logo is neatly constrained (44px on desktop, 32px on mobile) across all viewports.
- Video hero with poster fallback and ambient cyan lighting.
- Complete 7-category navigation with accessible dropdowns.
- Interactive mobile drawer with hamburger toggle.
- 10 interactive FAQs with smooth accordion expand/collapse.
- Technology badges, metric highlight bands, and service cards.
- Contact form with AJAX validation and WhatsApp/Call quick buttons.
- Fully compatible with Gutenberg, classic editor, and customizer.
`;
fs.writeFileSync(path.join(themeDir, "readme.txt"), readmeContent);

// 7. Create ZIP archives with EXPLICIT directory entries and proper UNIX permissions
console.log("Creating standard WordPress theme ZIP archive with proper directory records...");
const zipScript = `
import zipfile, os

src_folder = "wordpress-theme/avr-web-consulting"
standard_dest = "public/downloads/avr-web-consulting.zip"
direct_dest = "public/downloads/avr-web-consulting-direct.zip"

def create_archive(dest_file, include_prefix=True):
    with zipfile.ZipFile(dest_file, "w", zipfile.ZIP_DEFLATED) as z:
        if include_prefix:
            # Explicit root directory entry
            root_info = zipfile.ZipInfo("avr-web-consulting/")
            root_info.date_time = (2026, 10, 16, 12, 0, 0)
            root_info.external_attr = (0o040755 << 16) | 0x10
            z.writestr(root_info, "")

        for root, dirs, files in os.walk(src_folder):
            dirs.sort()
            files.sort()
            for d in dirs:
                dir_path = os.path.join(root, d)
                rel_dir = os.path.relpath(dir_path, "wordpress-theme").replace("\\\\", "/") + "/"
                if not include_prefix:
                    rel_dir = os.path.relpath(dir_path, src_folder).replace("\\\\", "/") + "/"
                z_info = zipfile.ZipInfo(rel_dir)
                z_info.date_time = (2026, 10, 16, 12, 0, 0)
                z_info.external_attr = (0o040755 << 16) | 0x10
                z.writestr(z_info, "")

            for f in files:
                file_path = os.path.join(root, f)
                rel_file = os.path.relpath(file_path, "wordpress-theme").replace("\\\\", "/")
                if not include_prefix:
                    rel_file = os.path.relpath(file_path, src_folder).replace("\\\\", "/")
                z_info = zipfile.ZipInfo(rel_file)
                z_info.date_time = (2026, 10, 16, 12, 0, 0)
                z_info.compress_type = zipfile.ZIP_DEFLATED
                z_info.external_attr = (0o100644 << 16)
                with open(file_path, "rb") as fp:
                    z.writestr(z_info, fp.read())

create_archive(standard_dest, include_prefix=True)
create_archive(direct_dest, include_prefix=False)
print("Standard and direct zip archives created successfully.")
`;

try {
  execSync(`python3 -c '${zipScript}'`, { stdio: "inherit" });
  // Copy to public/ for direct web access
  fs.copyFileSync(
    path.join(downloadsDir, "avr-web-consulting.zip"),
    path.join(publicDir, "avr-web-consulting.zip"),
  );
  fs.copyFileSync(
    path.join(downloadsDir, "avr-web-consulting-direct.zip"),
    path.join(publicDir, "avr-web-consulting-direct.zip"),
  );
  console.log("Theme zips are ready at /avr-web-consulting.zip and /downloads/");
} catch (err) {
  console.error("Failed to create zip file:", err.message);
}

console.log("--- Theme Packaging Complete ---");

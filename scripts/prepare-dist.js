import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const outputPublic = path.join(rootDir, ".output", "public");
const distDir = path.join(rootDir, "dist");
const publicDir = path.join(rootDir, "public");

console.log("--- Preparing dist/ directory for deployment ---");

// 1. Ensure dist directory exists
fs.mkdirSync(distDir, { recursive: true });

// 2. Recursive copy helper
function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 3. Copy files from .output/public into dist
if (fs.existsSync(outputPublic)) {
  console.log("Copying .output/public to dist...");
  copyDirRecursive(outputPublic, distDir);
}

// 4. Copy any missing files from public/ into dist
if (fs.existsSync(publicDir)) {
  console.log("Ensuring public assets are copied to dist...");
  copyDirRecursive(publicDir, distDir);
}

// 5. Ensure WordPress theme zips are also in dist
const themeZipSrc = path.join(publicDir, "avr-web-consulting.zip");
const themeDirectZipSrc = path.join(publicDir, "avr-web-consulting-direct.zip");
fs.mkdirSync(path.join(distDir, "downloads"), { recursive: true });

if (fs.existsSync(themeZipSrc)) {
  fs.copyFileSync(themeZipSrc, path.join(distDir, "avr-web-consulting.zip"));
  fs.copyFileSync(themeZipSrc, path.join(distDir, "downloads", "avr-web-consulting.zip"));
  console.log("WordPress theme zip copied to dist/ and dist/downloads/");
}

if (fs.existsSync(themeDirectZipSrc)) {
  fs.copyFileSync(themeDirectZipSrc, path.join(distDir, "avr-web-consulting-direct.zip"));
  fs.copyFileSync(
    themeDirectZipSrc,
    path.join(distDir, "downloads", "avr-web-consulting-direct.zip"),
  );
  console.log("WordPress direct theme zip copied to dist/ and dist/downloads/");
}

// 6. Find main index-*.js and index-*.css inside assets/ to generate index.html
const assetsDir = path.join(distDir, "assets");
let mainJs = "";
let mainCss = "";

if (fs.existsSync(assetsDir)) {
  const assetFiles = fs.readdirSync(assetsDir);
  for (const file of assetFiles) {
    if (file.startsWith("index-") && file.endsWith(".js")) {
      mainJs = `/assets/${file}`;
    }
    if (file.startsWith("index-") && file.endsWith(".css")) {
      mainCss = `/assets/${file}`;
    }
  }
}

console.log(`Found assets: JS=${mainJs}, CSS=${mainCss}`);

// 7. Write clean index.html into dist/
const indexHtmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="AVR Web Consulting - Digital Marketing, AI SEO, GEO, LLMO, and Web Development Agency" />
    <meta name="keywords" content="seo, ai seo, aeo, geo, llmo, digital marketing, web development, visakhapatnam" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="https://avrwebconsulting.com/" />
    <link rel="icon" href="/favicon.png" type="image/png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&display=swap"
    />
    ${mainCss ? `<link rel="stylesheet" href="${mainCss}" />` : ""}
    <link rel="stylesheet" href="/styles.css" />
    <title>AVR Web Consulting - Future-Proof SEO & AI-Visible Results</title>
    ${mainJs ? `<script type="module" crossorigin src="${mainJs}"></script>` : ""}
  </head>
  <body class="bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground min-h-screen flex flex-col justify-between">
    <div id="root"></div>
  </body>
</html>
`;

fs.writeFileSync(path.join(distDir, "index.html"), indexHtmlContent);
console.log("Generated dist/index.html successfully");

// Also copy root styles.css to dist/styles.css as fallback
if (fs.existsSync(path.join(rootDir, "src", "styles.css"))) {
  fs.copyFileSync(path.join(rootDir, "src", "styles.css"), path.join(distDir, "styles.css"));
}

console.log("--- dist/ preparation complete ---");

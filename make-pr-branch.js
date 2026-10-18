const { execSync } = require("child_process");

try {
  // 1. Fetch latest
  execSync("git fetch new-origin", { stdio: "inherit" });

  // 2. Checkout a new branch based on new-origin/main
  execSync("git checkout -b pr-ready new-origin/main", { stdio: "inherit" });

  // 3. Remove all files tracked by main
  execSync("git rm -rf .", { stdio: "inherit" });

  // 4. Copy all files from branch
  execSync("git checkout branch -- .", { stdio: "inherit" });

  // 5. Add all files (including untracked from checkout)
  execSync("git add .", { stdio: "inherit" });

  // 6. Commit
  execSync(
    'git commit -m "feat: complete site-wide SEO, structured content, and image mappings (PR Ready)"',
    { stdio: "inherit" },
  );

  // 7. Push
  execSync("git push new-origin pr-ready", { stdio: "inherit" });

  console.log("Successfully created and pushed pr-ready branch!");
} catch (e) {
  console.error("Error:", e.message);
}

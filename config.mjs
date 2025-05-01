// config.js
import { execSync } from "child_process";
import * as chromeLauncher from "chrome-launcher";

// Get current Git branch name
let branchName;
try {
  branchName = execSync("git rev-parse --abbrev-ref HEAD").toString().trim();
} catch (error) {
  console.error(
    "X | Could not determine the current branch. Are you in a Git repository?"
  );
  process.exit(1);
}

const baseUrl = "https://chbo70.github.io/sustainable-web-v2";
const url = `${baseUrl}/${branchName}`;
const reportBaseName = branchName || "report";

// Validate URL
if (!url) {
  console.error(
    "X | The URL could not be generated. Please ensure you are in a valid branch."
  );
  process.exit(1);
}

// Launch Chrome in headless mode
const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });

export { url, reportBaseName, chrome };

import fs from "fs";
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";
import { execSync } from "child_process";

// Get the current branch name using Git
let branchName;
try {
  branchName = execSync("git rev-parse --abbrev-ref HEAD").toString().trim();
} catch (error) {
  console.error(
    "❌ Could not determine the current branch. Are you in a Git repository?"
  );
  process.exit(1);
}

// Define the base URL of your test server (GitHub Pages or local)
const baseUrl = "https://chbo70.github.io/sustainable-web-v2";

// Construct the full URL based on the branch name
const url = `${baseUrl}/${branchName}`;
const reportName = branchName || "report"; // Use the branch name as the report name, fallback to "report" if not found

if (!url) {
  console.error(
    "❌ The URL could not be generated. Please ensure you are in a valid branch."
  );
  process.exit(1);
}

// Launch Chrome
const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });

// Lighthouse options
const options = {
  logLevel: "info",
  output: ["json", "html"], // Request both JSON and HTML
  onlyCategories: ["performance"],
  port: chrome.port,
};

// Run Lighthouse
const runnerResult = await lighthouse(url, options);

// Save reports
const [reportJson, reportHtml] = Array.isArray(runnerResult.report)
  ? runnerResult.report
  : [runnerResult.report]; // Fallback if only one format is returned

fs.writeFileSync(`lighthouse-${reportName}.json`, reportJson);
fs.writeFileSync(`lighthouse-${reportName}.html`, reportHtml);

console.log(`✅ Report done for ${runnerResult.lhr.finalDisplayedUrl}`);
console.log(
  `📊 Performance score: ${runnerResult.lhr.categories.performance.score * 100}`
);

// Kill Chrome
await chrome.kill();

import fs from "fs";
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";

const branchName = process.argv[3]; // The branch name passed when running the script
const baseUrl = "https://chbo70.github.io/sustainable-web-v2"; // Adjust this to your test server's base URL
const url = `${baseUrl}/${branchName}`; // Dynamically construct the URL based on branch name
const reportName = process.argv[3] || "report";

if (!url) {
  console.error(
    "❌ Please provide a URL to test, e.g., node lighthouse-runner.mjs http://localhost:3000 branch1"
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
console.log("✅ Chrome killed");

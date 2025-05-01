// mobileTest.js
import fs from "fs";
import lighthouse from "lighthouse";
import { url, reportBaseName, chrome } from "./config.mjs";

const categories = ["performance", "accessibility", "best-practices", "seo"];

// Mobile config
const mobileOptions = {
  logLevel: "info",
  output: ["json", "html"],
  onlyCategories: categories,
  port: chrome.port,
  formFactor: "mobile",
  screenEmulation: undefined,
};

// Run Mobile Audit
const mobileResult = await lighthouse(url, mobileOptions);
const [mobileJson, mobileHtml] = Array.isArray(mobileResult.report)
  ? mobileResult.report
  : [mobileResult.report];

// trim slashes from reportBaseName
const trimmedReportBaseName = reportBaseName.replace(/[\/\\]/g, ""); // Remove all forward slashes and backslashes

// in reports directory
const reportsDir = "reports";
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir);
}

fs.writeFileSync(
  `${reportsDir}/lighthouse-${trimmedReportBaseName}-mobile.json`,
  mobileJson
);
fs.writeFileSync(
  `${reportsDir}/lighthouse-${trimmedReportBaseName}-mobile.html`,
  mobileHtml
);

console.log(`✅ Mobile report done for ${mobileResult.lhr.finalDisplayedUrl}`);
console.log(
  `📱 Performance score: ${mobileResult.lhr.categories.performance.score * 100}`
);

// Close Chrome instance
await chrome.kill();

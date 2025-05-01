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

fs.writeFileSync(`lighthouse-${reportBaseName}-mobile.json`, mobileJson);
fs.writeFileSync(`lighthouse-${reportBaseName}-mobile.html`, mobileHtml);

console.log(`✅ Mobile report done for ${mobileResult.lhr.finalDisplayedUrl}`);
console.log(
  `📱 Performance score: ${mobileResult.lhr.categories.performance.score * 100}`
);

// Close Chrome instance
await chrome.kill();

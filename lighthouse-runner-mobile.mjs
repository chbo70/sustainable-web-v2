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

// Trim slashes from base name
const trimmedReportBaseName = reportBaseName.replace(/[\/\\]/g, "");

const reportsDir = "reports";
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir);
}

for (let i = 1; i <= 3; i++) {
  const result = await lighthouse(url, mobileOptions);
  const [jsonReport, htmlReport] = Array.isArray(result.report)
    ? result.report
    : [result.report];

  const jsonPath = `${reportsDir}/lighthouse-${trimmedReportBaseName}-mobile-${i}.json`;
  const htmlPath = `${reportsDir}/lighthouse-${trimmedReportBaseName}-mobile-${i}.html`;

  fs.writeFileSync(jsonPath, jsonReport);
  fs.writeFileSync(htmlPath, htmlReport);

  console.log(
    `✅ [${i}/3] Mobile report done for ${result.lhr.finalDisplayedUrl}`
  );
  console.log(
    `📱 [${i}/3] Performance score: ${
      result.lhr.categories.performance.score * 100
    }`
  );
}

// Close Chrome instance
await chrome.kill();

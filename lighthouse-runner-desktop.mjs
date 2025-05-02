import fs from "fs";
import lighthouse from "lighthouse";
import { url, reportBaseName, chrome } from "./config.mjs";

const categories = ["performance", "accessibility", "best-practices", "seo"];

// Desktop configuration
const desktopOptions = {
  logLevel: "info",
  output: ["json", "html"],
  onlyCategories: categories,
  port: chrome.port,
  formFactor: "desktop",
  screenEmulation: {
    width: 1920,
    height: 1080,
    deviceScaleRatio: 1,
    mobile: false,
    disabled: false,
  },
  emulatedUserAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
};

// Trim slashes from base name
const trimmedReportBaseName = reportBaseName.replace(/[\/\\]/g, "");

const reportsDir = "reports";
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir);
}

for (let i = 1; i <= 3; i++) {
  const result = await lighthouse(url, desktopOptions);
  const [jsonReport, htmlReport] = Array.isArray(result.report)
    ? result.report
    : [result.report];

  const jsonPath = `${reportsDir}/lighthouse-${trimmedReportBaseName}-desktop-${i}.json`;
  const htmlPath = `${reportsDir}/lighthouse-${trimmedReportBaseName}-desktop-${i}.html`;

  fs.writeFileSync(jsonPath, jsonReport);
  fs.writeFileSync(htmlPath, htmlReport);

  console.log(
    `✅ [${i}/3] Desktop report done for ${result.lhr.finalDisplayedUrl}`
  );
  console.log(
    `🖥️  [${i}/3] Performance score: ${
      result.lhr.categories.performance.score * 100
    }`
  );
}

// Close Chrome instance
await chrome.kill();

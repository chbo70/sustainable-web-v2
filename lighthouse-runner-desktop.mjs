// desktopTest.js
import fs from "fs";
import lighthouse from "lighthouse";
import { url, reportBaseName, chrome } from "./config.mjs";

const categories = ["performance", "accessibility", "best-practices", "seo"];

// Desktop config
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

// Run Desktop Audit
const desktopResult = await lighthouse(url, desktopOptions);
const [desktopJson, desktopHtml] = Array.isArray(desktopResult.report)
  ? desktopResult.report
  : [desktopResult.report];

fs.writeFileSync(`lighthouse-${reportBaseName}-desktop.json`, desktopJson);
fs.writeFileSync(`lighthouse-${reportBaseName}-desktop.html`, desktopHtml);

console.log(
  `✅ Desktop report done for ${desktopResult.lhr.finalDisplayedUrl}`
);
console.log(
  `🖥️  Performance score: ${
    desktopResult.lhr.categories.performance.score * 100
  }`
);

// Close Chrome instance
await chrome.kill();

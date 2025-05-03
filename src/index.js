import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";

function setFontCookieWhenLoaded(fontName = "Montserrat") {
  const cookieKey = `font-loaded-${fontName}`;

  if (
    document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${cookieKey}=true`))
  ) {
    console.log(`Cookie already set for ${fontName}`);
    return;
  }

  document.fonts.load(`1em ${fontName}`).then(() => {
    document.cookie = `${cookieKey}=true; path=/; max-age=31536000`;
    console.log(`${fontName} is now loaded; cookie set.`);
  });
}

setFontCookieWhenLoaded();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

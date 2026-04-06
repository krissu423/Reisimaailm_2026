import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";

const BASE = import.meta.env.BASE_URL;

function fixInternalLinks(root: ParentNode = document) {
  root.querySelectorAll<HTMLAnchorElement>('a[href^="/"]:not([href^="//"])').forEach((a) => {
    const href = a.getAttribute("href");
    if (!href) return;

    if (href === "/") {
      a.setAttribute("href", BASE);
    } else {
      a.setAttribute("href", `${BASE}${href.slice(1)}`);
    }
  });
}

fixInternalLinks();

new MutationObserver(() => fixInternalLinks()).observe(document.body, {
  childList: true,
  subtree: true,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/* iad-theme/iad.js — V6 */

(function () {
  "use strict";

  var config = Object.assign({
    agentName: "Laurent Malet",
    role: "Votre conseiller immobilier",
    phone: "0665131037",
    phoneDisplay: "06 65 13 10 37",
    email: "l.malet@iadfrance.fr",
    website: "https://www.iadfrance.fr/conseiller-immobilier/l.malet",
    websiteDisplay: "iadfrance.fr/conseiller-immobilier/l.malet"
  }, window.IAD_THEME || {});

  function injectTheme() {
    if (document.body.classList.contains("iad-themed")) return;
    document.body.classList.add("iad-themed");

    var topbar = document.createElement("header");
    topbar.id = "iadTopbar";
    topbar.innerHTML = `
      <div class="iad-brand">
        <div class="iad-logo">iad</div>
        <div class="iad-brand-name">iad immobilier</div>
      </div>

      <div class="iad-agent">
        <strong>${config.agentName}</strong>
        <span>${config.role}</span>
      </div>

      <div class="iad-top-spacer"></div>

      <a class="iad-phone-top" href="tel:${config.phone}">☎ ${config.phoneDisplay}</a>
      <a class="iad-button" href="mailto:${config.email}">✉ Me contacter</a>
    `;

    var bottombar = document.createElement("footer");
    bottombar.id = "iadBottombar";
    bottombar.innerHTML = `
      <a class="iad-bottom-link" href="tel:${config.phone}">
        <span class="iad-bottom-icon">☎</span>
        <span><strong>${config.phoneDisplay}</strong><span>Appelez-moi</span></span>
      </a>

      <div class="iad-bottom-separator"></div>

      <a class="iad-bottom-link" href="mailto:${config.email}">
        <span class="iad-bottom-icon">✉</span>
        <span><strong>${config.email}</strong><span>Écrivez-moi</span></span>
      </a>

      <div class="iad-bottom-separator"></div>

      <a class="iad-bottom-link" href="${config.website}" target="_blank" rel="noopener">
        <span class="iad-bottom-icon">🌐</span>
        <span><strong>${config.websiteDisplay}</strong><span>Visitez mon site IAD</span></span>
      </a>

      <div class="iad-bottom-spacer"></div>

      <div class="iad-bottom-logo">iad</div>

      <div class="iad-bottom-project">
        <strong>Un projet immobilier ?</strong>
        <span>Parlons-en ensemble</span>
      </div>

      <a class="iad-bottom-button" href="mailto:${config.email}">Me contacter</a>
    `;

    document.body.insertBefore(topbar, document.body.firstChild);
    document.body.appendChild(bottombar);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectTheme);
  } else {
    injectTheme();
  }
})();

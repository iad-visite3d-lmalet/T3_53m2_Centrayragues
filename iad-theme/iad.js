/* iad-theme/iad.js
   Injecte les bandeaux IAD sans modifier les fichiers Marzipano.
*/

(function () {
  "use strict";

  var config = Object.assign({
    agentName: "Laurent Malet",
    role: "Votre conseiller immobilier",
    phone: "0665131037",
    phoneDisplay: "06 65 13 10 37",
    email: "l.malet@iadfrance.fr",
    website: "https://www.iadfrance.fr/conseiller-immobilier/l.malet"
  }, window.IAD_THEME || {});

  function injectTheme() {
    if (document.body.classList.contains("iad-themed")) return;

    document.body.classList.add("iad-themed");

    var topbar = document.createElement("header");
    topbar.id = "iadTopbar";
    topbar.innerHTML = `
      <div class="iad-brand">
        <div class="iad-logo">iad</div>
        <div>
          <div class="iad-brand-name">iad immobilier</div>
          <div class="iad-tagline">Ça fait du bien à l'immobilier</div>
        </div>
      </div>

      <div class="iad-agent">
        <strong>${config.agentName}</strong>
        <span>${config.role}</span>
      </div>

      <a class="iad-link" href="tel:${config.phone}">☎ ${config.phoneDisplay}</a>
      <a class="iad-link" href="mailto:${config.email}">✉ ${config.email}</a>
      <a class="iad-link" href="${config.website}" target="_blank" rel="noopener">🌐 Site IAD</a>
      <a class="iad-button" href="mailto:${config.email}">Me contacter</a>
    `;

    var bottombar = document.createElement("footer");
    bottombar.id = "iadBottombar";
    bottombar.innerHTML = `
      <a href="tel:${config.phone}"><strong>☎ ${config.phoneDisplay}</strong><span>Appelez-moi</span></a>
      <a href="mailto:${config.email}"><strong>✉ ${config.email}</strong><span>Écrivez-moi</span></a>
      <a href="${config.website}" target="_blank" rel="noopener"><strong>🌐 Site IAD</strong><span>Voir mon profil</span></a>
      <div class="iad-bottom-spacer"></div>
      <div class="iad-bottom-logo">iad</div>
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

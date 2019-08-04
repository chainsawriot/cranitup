// ==UserScript==
// @name         cranitup
// @namespace    http://tampermonkey.net/
// @version      0.1.3
// @description  try to take over the world!
// @author       Chung-hong Chan
// @include      https://*.r-project.org/web/packages/*
// @exclude      https://*.r-project.org/web/packages/available_packages_by_name.html
// @exclude      https://*.r-project.org/web/packages/available_packages_by_date.html
// @exclude      https://*.r-project.org/web/packages/index.html
// @exclude      https://*.r-project.org/web/packages/*/vignettes/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict'
    var pkg_name = document.querySelector('h2').textContent.split(':')[0]
    var download_badge = document.createElement("img")
    download_badge.src = "https://cranlogs.r-pkg.org/badges/last-week/" + pkg_name
    document.querySelector('body > h2').after(download_badge)
    var version_box = document.querySelector('body > table:nth-child(4) > tbody > tr:nth-child(1) > td:nth-child(2)')
    version_box.innerText = ""
    var version_badge = document.createElement("img")
    version_badge.src = "https://www.r-pkg.org/badges/version-ago/" + pkg_name
    version_box.appendChild(version_badge)
})();
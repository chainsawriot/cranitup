// ==UserScript==
// @name         cranitup
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  try to take over the world!
// @author       Chung-hong Chan
// @include      https://*.r-project.org/web/packages/*
// @exclude      https://*.r-project.org/web/packages/available_packages_by_name.html
// @exclude      https://*.r-project.org/web/packages/available_packages_by_date.html
// @exclude      https://*.r-project.org/web/packages/index.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict'
    var pkg_name = document.querySelector('h2').textContent.split(':')[0]
    var download_badge = document.createElement("img")
    download_badge.src = "https://cranlogs.r-pkg.org/badges/last-week/" + pkg_name
    document.querySelector('body > h2').after(download_badge)
})();
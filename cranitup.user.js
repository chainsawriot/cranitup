// ==UserScript==
// @name         cranitup
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make CRAN more userful.
// @author       Chung-hong Chan
// @match        https://*.r-project.org/web/packages/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict'
    var pkg_name = document.querySelector('h2').textContent.split(':')[0]
    var download_badge = document.createElement("img")
    download_badge.src = "http://cranlogs.r-pkg.org/badges/last-week/" + pkg_name
    document.querySelector('body > h2').after(download_badge)
})();

// ==UserScript==
// @name         cranitup
// @namespace    http://tampermonkey.net/
// @version      0.1.4
// @description  try to take over the world!
// @author       Chung-hong Chan
// @include      https://*.r-project.org/web/packages/*
// @exclude      https://*.r-project.org/web/packages/available_packages_by_name.html
// @exclude      https://*.r-project.org/web/packages/available_packages_by_date.html
// @exclude      https://*.r-project.org/web/packages/index.html
// @exclude      https://*.r-project.org/web/packages/*/vignettes/*
// @grant        GM_setClipboard
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict'
    //var script = document.createElement('script');
    //script.type = 'text/javascript';
    //script.src = 'https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js'
    //document.head.appendChild(script);
    var pkg_name = document.querySelector('h2').textContent.split(':')[0]
    var download_badge = document.createElement("img")
    download_badge.src = "https://cranlogs.r-pkg.org/badges/last-week/" + pkg_name
    document.querySelector('body > h2').after(download_badge)
    var version_box = document.querySelector('body > table:nth-child(4) > tbody > tr:nth-child(1) > td:nth-child(2)')
    version_box.innerText = ""
    var version_badge = document.createElement("img")
    version_badge.src = "https://www.r-pkg.org/badges/version-ago/" + pkg_name
    version_box.appendChild(version_badge)
    function copy_install () {
        var pkg_name = document.querySelector('h2').textContent.split(':')[0]
        GM_setClipboard ("install.packages(\"" + pkg_name + "\", dependencies = TRUE)");
    }
    var copy_button = document.createElement("button")
    copy_button.autofocus = true
    copy_button.innerText = "copy"
    var br = document.createElement("br")
    copy_button.onclick = copy_install
    var input_box = document.createElement("input")
    input_box.type = 'text'
    input_box.value = "install.packages(\"" + pkg_name + "\", dependencies = TRUE)"
    input_box.size = 80
    document.querySelector('p').append(br, br, input_box, copy_button)
    GM_addStyle("
@media (prefers-color-scheme: light) {
    :root {
	--background-color: white;
	--text-color: black;
	--link-color: blue;
	--sec-color: rgb(55%, 55%, 55%);
    }
}

@media (prefers-color-scheme: dark) {
    :root {
	--background-color: #121212;
	--text-color: white;
	--link-color: #BB86FC;
	--sec-color: #3700B7;
    }
}

body {
    background: var(--background-color);
    color: var(--text-color);
}

h1 {
    background: var(--background-color);
    color: var(--sec-color);
    font-family: monospace;
    font-size: x-large;
    text-align: center;
}

h2 {
    background: var(--background-color);
    color: var(--sec-color);
    font-family: monospace;
    font-size: large;
}

h3, h4, h5 {
    background: var(--background-color);
    color: var(--sec-color);
    font-family: monospace;
}

a {
    background: var(--background-color);
    color: var(--link-color);
}

em.navigation {
    font-weight: bold;
    font-style: normal;
    background: var(--background-color);
    color: var(--sec-color);
    font-family: monospace;
}

img.toplogo {
    vertical-align: middle;
}

span.check_ok {
    color: black;
}

span.check_ko {
    color: red;
}

span.BioC {
    color: #2C92A1;
}

span.Ohat {
    color: #8A4513;
}

span.Gcode {
    color: #5B8A00;
}

span.Rforge {
    color: #8009AA;
}

span.GitHub {
    color: #9F7BE1;
}

span.acronym {
    font-size: small;
}

span.env {
    font-family: monospace;
}

span.file {
    font-family: monospace;
}

span.option {
    font-family: monospace;
}

span.pkg {
    font-weight: bold;
}

span.samp {
    font-family: monospace;
}
")
})();

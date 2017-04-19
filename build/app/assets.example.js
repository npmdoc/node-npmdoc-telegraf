/*
example.js

quickstart example

instruction
    1. save this script as example.js
    2. run the shell command:
        $ npm install npmdoc-telegraf && PORT=8081 node example.js
    3. play with the browser-demo on http://127.0.0.1:8081
*/



/* istanbul instrument in package npmdoc_telegraf */
/*jslint
    bitwise: true,
    browser: true,
    maxerr: 8,
    maxlen: 96,
    node: true,
    nomen: true,
    regexp: true,
    stupid: true
*/
(function () {
    'use strict';
    var local;



    // run shared js-env code - pre-init
    (function () {
        // init local
        local = {};
        // init modeJs
        local.modeJs = (function () {
            try {
                return typeof navigator.userAgent === 'string' &&
                    typeof document.querySelector('body') === 'object' &&
                    typeof XMLHttpRequest.prototype.open === 'function' &&
                    'browser';
            } catch (errorCaughtBrowser) {
                return module.exports &&
                    typeof process.versions.node === 'string' &&
                    typeof require('http').createServer === 'function' &&
                    'node';
            }
        }());
        // init global
        local.global = local.modeJs === 'browser'
            ? window
            : global;
        // init utility2_rollup
        local = local.global.utility2_rollup || (local.modeJs === 'browser'
            ? local.global.utility2_npmdoc_telegraf
            : global.utility2_moduleExports);
        // export local
        local.global.local = local;
    }());
    switch (local.modeJs) {



    // post-init
    // run browser js-env code - post-init
    /* istanbul ignore next */
    case 'browser':
        local.testRunBrowser = function (event) {
            if (!event || (event &&
                    event.currentTarget &&
                    event.currentTarget.className &&
                    event.currentTarget.className.includes &&
                    event.currentTarget.className.includes('onreset'))) {
                // reset output
                Array.from(
                    document.querySelectorAll('body > .resettable')
                ).forEach(function (element) {
                    switch (element.tagName) {
                    case 'INPUT':
                    case 'TEXTAREA':
                        element.value = '';
                        break;
                    default:
                        element.textContent = '';
                    }
                });
            }
            switch (event && event.currentTarget && event.currentTarget.id) {
            case 'testRunButton1':
                // show tests
                if (document.querySelector('#testReportDiv1').style.display === 'none') {
                    document.querySelector('#testReportDiv1').style.display = 'block';
                    document.querySelector('#testRunButton1').textContent =
                        'hide internal test';
                    local.modeTest = true;
                    local.testRunDefault(local);
                // hide tests
                } else {
                    document.querySelector('#testReportDiv1').style.display = 'none';
                    document.querySelector('#testRunButton1').textContent = 'run internal test';
                }
                break;
            // custom-case
            default:
                break;
            }
            if (document.querySelector('#inputTextareaEval1') && (!event || (event &&
                    event.currentTarget &&
                    event.currentTarget.className &&
                    event.currentTarget.className.includes &&
                    event.currentTarget.className.includes('oneval')))) {
                // try to eval input-code
                try {
                    /*jslint evil: true*/
                    eval(document.querySelector('#inputTextareaEval1').value);
                } catch (errorCaught) {
                    console.error(errorCaught);
                }
            }
        };
        // log stderr and stdout to #outputTextareaStdout1
        ['error', 'log'].forEach(function (key) {
            console[key + '_original'] = console[key];
            console[key] = function () {
                var element;
                console[key + '_original'].apply(console, arguments);
                element = document.querySelector('#outputTextareaStdout1');
                if (!element) {
                    return;
                }
                // append text to #outputTextareaStdout1
                element.value += Array.from(arguments).map(function (arg) {
                    return typeof arg === 'string'
                        ? arg
                        : JSON.stringify(arg, null, 4);
                }).join(' ') + '\n';
                // scroll textarea to bottom
                element.scrollTop = element.scrollHeight;
            };
        });
        // init event-handling
        ['change', 'click', 'keyup'].forEach(function (event) {
            Array.from(document.querySelectorAll('.on' + event)).forEach(function (element) {
                element.addEventListener(event, local.testRunBrowser);
            });
        });
        // run tests
        local.testRunBrowser();
        break;



    // run node js-env code - post-init
    /* istanbul ignore next */
    case 'node':
        // export local
        module.exports = local;
        // require modules
        local.fs = require('fs');
        local.http = require('http');
        local.url = require('url');
        // init assets
        local.assetsDict = local.assetsDict || {};
        /* jslint-ignore-begin */
        local.assetsDict['/assets.index.template.html'] = '\
<!doctype html>\n\
<html lang="en">\n\
<head>\n\
<meta charset="UTF-8">\n\
<meta name="viewport" content="width=device-width, initial-scale=1">\n\
<title>{{env.npm_package_name}} (v{{env.npm_package_version}})</title>\n\
<style>\n\
/*csslint\n\
    box-sizing: false,\n\
    universal-selector: false\n\
*/\n\
* {\n\
    box-sizing: border-box;\n\
}\n\
body {\n\
    background: #dde;\n\
    font-family: Arial, Helvetica, sans-serif;\n\
    margin: 2rem;\n\
}\n\
body > * {\n\
    margin-bottom: 1rem;\n\
}\n\
.utility2FooterDiv {\n\
    margin-top: 20px;\n\
    text-align: center;\n\
}\n\
</style>\n\
<style>\n\
/*csslint\n\
*/\n\
textarea {\n\
    font-family: monospace;\n\
    height: 10rem;\n\
    width: 100%;\n\
}\n\
textarea[readonly] {\n\
    background: #ddd;\n\
}\n\
</style>\n\
</head>\n\
<body>\n\
<!-- utility2-comment\n\
<div id="ajaxProgressDiv1" style="background: #d00; height: 2px; left: 0; margin: 0; padding: 0; position: fixed; top: 0; transition: background 0.5s, width 1.5s; width: 25%;"></div>\n\
utility2-comment -->\n\
<h1>\n\
<!-- utility2-comment\n\
    <a\n\
        {{#if env.npm_package_homepage}}\n\
        href="{{env.npm_package_homepage}}"\n\
        {{/if env.npm_package_homepage}}\n\
        target="_blank"\n\
    >\n\
utility2-comment -->\n\
        {{env.npm_package_name}} (v{{env.npm_package_version}})\n\
<!-- utility2-comment\n\
    </a>\n\
utility2-comment -->\n\
</h1>\n\
<h3>{{env.npm_package_description}}</h3>\n\
<!-- utility2-comment\n\
<h4><a download href="assets.app.js">download standalone app</a></h4>\n\
<button class="onclick onreset" id="testRunButton1">run internal test</button><br>\n\
<div id="testReportDiv1" style="display: none;"></div>\n\
utility2-comment -->\n\
\n\
\n\
\n\
<label>stderr and stdout</label>\n\
<textarea class="resettable" id="outputTextareaStdout1" readonly></textarea>\n\
<!-- utility2-comment\n\
{{#if isRollup}}\n\
<script src="assets.app.js"></script>\n\
{{#unless isRollup}}\n\
utility2-comment -->\n\
<script src="assets.utility2.rollup.js"></script>\n\
<script src="jsonp.utility2._stateInit?callback=window.utility2._stateInit"></script>\n\
<script src="assets.npmdoc_telegraf.rollup.js"></script>\n\
<script src="assets.example.js"></script>\n\
<script src="assets.test.js"></script>\n\
<!-- utility2-comment\n\
{{/if isRollup}}\n\
utility2-comment -->\n\
<div class="utility2FooterDiv">\n\
    [ this app was created with\n\
    <a href="https://github.com/kaizhu256/node-utility2" target="_blank">utility2</a>\n\
    ]\n\
</div>\n\
</body>\n\
</html>\n\
';
        /* jslint-ignore-end */
        if (local.templateRender) {
            local.assetsDict['/'] = local.templateRender(
                local.assetsDict['/assets.index.template.html'],
                {
                    env: local.objectSetDefault(local.env, {
                        npm_package_description: 'the greatest app in the world!',
                        npm_package_name: 'my-app',
                        npm_package_nameAlias: 'my_app',
                        npm_package_version: '0.0.1'
                    })
                }
            );
        } else {
            local.assetsDict['/'] = local.assetsDict['/assets.index.template.html']
                .replace((/\{\{env\.(\w+?)\}\}/g), function (match0, match1) {
                    // jslint-hack
                    String(match0);
                    switch (match1) {
                    case 'npm_package_description':
                        return 'the greatest app in the world!';
                    case 'npm_package_name':
                        return 'my-app';
                    case 'npm_package_nameAlias':
                        return 'my_app';
                    case 'npm_package_version':
                        return '0.0.1';
                    }
                });
        }
        // run the cli
        if (local.global.utility2_rollup || module !== require.main) {
            break;
        }
        local.assetsDict['/assets.example.js'] =
            local.assetsDict['/assets.example.js'] ||
            local.fs.readFileSync(__filename, 'utf8');
        // bug-workaround - long $npm_package_buildCustomOrg
        /* jslint-ignore-begin */
        local.assetsDict['/assets.npmdoc_telegraf.rollup.js'] =
            local.assetsDict['/assets.npmdoc_telegraf.rollup.js'] ||
            local.fs.readFileSync(
                local.npmdoc_telegraf.__dirname + '/lib.npmdoc_telegraf.js',
                'utf8'
            ).replace((/^#!/), '//');
        /* jslint-ignore-end */
        local.assetsDict['/favicon.ico'] = local.assetsDict['/favicon.ico'] || '';
        // if $npm_config_timeout_exit exists,
        // then exit this process after $npm_config_timeout_exit ms
        if (Number(process.env.npm_config_timeout_exit)) {
            setTimeout(process.exit, Number(process.env.npm_config_timeout_exit));
        }
        // start server
        if (local.global.utility2_serverHttp1) {
            break;
        }
        process.env.PORT = process.env.PORT || '8081';
        console.error('server starting on port ' + process.env.PORT);
        local.http.createServer(function (request, response) {
            request.urlParsed = local.url.parse(request.url);
            if (local.assetsDict[request.urlParsed.pathname] !== undefined) {
                response.end(local.assetsDict[request.urlParsed.pathname]);
                return;
            }
            response.statusCode = 404;
            response.end();
        }).listen(process.env.PORT);
        break;
    }
}());

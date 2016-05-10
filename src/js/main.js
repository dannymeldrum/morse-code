function version($log) {
    window.console && console.log($log);
}
function dbg($log) {
    window.console && console.log($log);
}

require.config({
    baseUrl: '../../src/js',

    paths: {
        // App (kicks things off)
        app: 'app',

        // Libraries (third party stuff)
        jquery: 'libs/jquery-1.11.1.min',

        // Common (Stuff we solve again and again)
        windowListener: 'common/windowListener',
        ieCheck: 'common/ieCheck',
        //'svg-fallback': 'common/svg-fallback',
        accessibility: 'common/accessibility',

        // Modules (specific tasks for this project)
        convert: 'modules/convert',

    },

    shim : {
        //"snippet" : ["jquery"],
    }
});

require(['app']);

/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // or 'traceur' or 'typescript'
        transpiler: 'babel',
        // or traceurOptions or typescriptOptions
        babelOptions: {},
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'cp1'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './index.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);
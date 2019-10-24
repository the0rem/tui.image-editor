import scss from 'rollup-plugin-scss';
import serve from 'rollup-plugin-serve';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import sourceMaps from 'rollup-plugin-sourcemaps';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import liveReload from 'rollup-plugin-livereload';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'umd',
        name: 'tui',
        sourcemap: true,
    },
    external: [
       'fabric/dist/fabric.require',
    ],
    plugins: [
        scss({
            output: 'dist/bundle.css',
        }),
        resolve({
            module: true,
            jsnext: true,
            main: true,
            browser: true,
        }),
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            // presets: [
            //     [
            //         "@babel/env",
            //         {
            //             modules: false,
            //             useBuiltIns: "usage",
            //             corejs: {
            //                 version: 3,
            //                 proposals: true,
            //             },
            //         },
            //     ],
            // ],
        }),
        commonjs({
            include: /node_modules/,
            browser: true,
            preferBuiltins: false,
            ignoreGlobal: false,
        }),
        globals(),
        builtins(),
        json(),
        sourceMaps(),
        serve({
            openPage: '/example01-includeUi.html',
            contentBase: [
                'examples',
                'dist',
                'src/assets'
            ]
        }),
        liveReload('dist')
    ]
};
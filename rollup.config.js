import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

import postcss from 'rollup-plugin-postcss';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';

export default {
    entry: 'src/js/index.js',
    dest: 'build/index.js',
    plugins: [
        babel(),
        postcss({
            plugins: [
                cssnext(),
                cssnano(),
            ],
        }),
        nodeResolve({
            jsnext: true,
            extensions: ['.js', '.json', '.jsx',],
        }),
    ],
};


import jsx from 'rollup-plugin-jsx'
import progress from 'rollup-plugin-progress'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import replace from 'rollup-plugin-replace'
import { terser } from "rollup-plugin-terser";

module.exports = {
  input: 'src/main.js',
  output: {
    name: 'wkk',
    exports: 'named',
    file: './build/bundle.js',
    format: 'umd',
    sourcemap: 'inline'
  },
  plugins: [
    progress(),
    resolve({
      browser: true
    }),
    json(),
    jsx({ factory: 'React.createElement' }),
    commonjs({
      include: ['node_modules/**'],
      exclude: ['node_modules/process-es6/**'],
      namedExports: {
        'node_modules/react/index.js': [
          'Children',
          'Component',
          'PropTypes',
          'createElement'
        ],
        'node_modules/react-dom/index.js': ['render']
      }
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    terser()
  ]
}

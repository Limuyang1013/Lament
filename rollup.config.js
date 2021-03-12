import path from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import packageJSON from './package.json'
import babel from 'rollup-plugin-babel'

function _resolve (..._path) {
  return path.resolve(__dirname, ..._path)
}

const extensions = [
  '.js',
  '.ts',
  '.tsx'
]

module.exports = {
  input: _resolve('./src/index.ts'),
  output: {
    file: _resolve('./', packageJSON.main),
    format: 'esm'
  },
  plugins: [
      nodeResolve({
        extensions,
        modulesOnly: true
      }),
    babel({
      exclude: 'node_modules/**',
      extensions,
    })
  ]
}

import { Config } from '@stencil/core'
import alias from '@rollup/plugin-alias'
import path from 'path'

export const config: Config = {
  namespace: 'winr-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    alias({
      entries: [
        { find: '@', replacement: path.resolve(path.resolve(__dirname), 'src') },
      ]
    })
  ]
}

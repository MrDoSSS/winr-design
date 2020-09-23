import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import alias from '@rollup/plugin-alias'
import path from 'path'

export const config: Config = {
  namespace: 'winr-components',
  globalStyle: 'src/global/global.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'global/fonts', warn: true, dest: 'fonts' }
      ]
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
      copy: [
        { src: 'global/fonts', warn: true, dest: 'fonts' }
      ]
    },
  ],
  plugins: [
    alias({
      entries: [
        { find: '@', replacement: path.resolve(path.resolve(__dirname), 'src') },
      ]
    }),
    sass()
  ]
}

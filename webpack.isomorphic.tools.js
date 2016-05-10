const plugin = require('webpack-isomorphic-tools/plugin')

const config = {
  webpackAssetsFilePath: '../webpack-assets.json',
  webpackStatsFilePath: '../webpack-stats.json',
  assets: {
    scss: {
      extensions: ['scss'],
      filter: (module, regex, options, log) => {
        if (options.development) {
          return plugin.styleLoaderFilter(module, regex, options, log)
        }

        return regex.test(module.name)
      },
      path: (module, options, log) => {
        if (options.development) {
          return plugin.styleLoaderPathExtractor(module, options, log)
        }

        return module.name
      },
      parser: (module, options, log) => {
        if (options.development) {
          return plugin.cssModulesLoaderParser(module, options, log)
        }

        return module.source
      }
    }
  }
}

module.exports = config

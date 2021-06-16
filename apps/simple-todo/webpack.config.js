const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "simpleTodo",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
        name: "simpleTodo",
        filename: "remoteEntry.js",
        exposes: {
            './Module': './apps/simple-todo/src/app/app.module.ts',
        },
        shared: {
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '12.0.4' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: '12.0.4' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: '12.0.4' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: '12.0.4' },

          ...sharedMappings.getDescriptors()
        }

    }),
    sharedMappings.getPlugin()
  ],
};

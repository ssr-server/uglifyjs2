"use strict";

const name = 'ssrwpo:uglifyjs2';
Package.describe({
  name,
  version: '0.0.1',
  summary: 'Meteor package that exposes options for UglifyJS2 JS minifier',
  git: 'https://github.com/ssr-server/uglifyjs2',
  documentation: 'README.md'
});

const pkgs = ['ecmascript', 'minifier-js', 'isobuild:minifier-plugin@1.0.0'];
Package.registerBuildPlugin({
  name,
  use: pkgs,
  sources: ['plugin.js']
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');
  api.use(pkgs, 'server');
});

Package.onTest(function(api) {
  api.use(pkgs.concat(['tinytest', name]), 'server');
  api.mainModule('uglifyjs2-tests.js');
});

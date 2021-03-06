exports.config = {
  directConnect: true,
  chromeDriver: require('chromedriver').path,
  specs: [
    'htmlTests.js'
  ],
  
  multiCapabilities: [{
    'browserName': 'chrome'
  }, {
    'browserName': 'firefox'
  }],

  onPrepare: require('./onprepare'),
  rootElement: 'body',

  jasmineNodeOpts: { includeStackTrace: true }
};

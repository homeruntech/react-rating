module.exports = {
  type: 'react-component',
  karma: {
    testContext: 'tests.config.js'
  },
  npm: {
    cjs: true,
    esModules: true,
    umd: false,
  },
  webpack: {
    html: {
      mountId: 'root',
      template: 'demo/src/index.html',
      title: 'Unimaginative documentation example'
    }
  }
}

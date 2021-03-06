const common = require('./common')

module.exports = {
    ...common,

    mode: 'production',

    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all'
        }
    }
}
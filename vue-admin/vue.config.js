const path = require('path');
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '': '/',
    outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
    lintOnSave: true,
    chainWebpack:(config) =>{},
    configureWebpack:(config) => {
        //4:20 p3
    },
    productionSourceMap: false,
    css:{
        extract: true,
        sourceMap: false,
        loaderOptions: {
            sass:{
                additionalData: 
                    `@import "@/styles/main.scss";`
            }
        }
    },
    parallel: require('os').cpus().length > 1,
    pwa:{},
    devServer:{
        open: false,
        host: '0.0.0.0',
        port: 8000,
        https: false,
        hot: true,
        hotOnly: false,
        proxy: null,
        overlay: {
            warning: true,
            errors: true
        },
        before: app => {

        }
    },
    pluginOptions:{
    }
}
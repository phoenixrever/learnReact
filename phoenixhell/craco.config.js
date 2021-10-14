/* craco.config.js */
const CracoLessPlugin = require('craco-less');

module.exports = {
    babel:{
        plugins: [
            [
                "import",
                {
                    "libraryName": "antd",
                    "libraryDirectory": "es",
                    "style": true //设置为true即是less
                }
            ]
        ]
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        // modifyVars: getThemeVariables({
                        //     dark: true, // 开启暗黑模式
                        //     compact: true, // 开启紧凑模式
                        // }),
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],

};
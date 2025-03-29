

module.exports = {
    module:{
        rules: [
            {
                test: /\.m?js$/, //any file which ends with js or mjs will be processed by babel
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-react','@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    }
                }
            }
        ]
    },

}
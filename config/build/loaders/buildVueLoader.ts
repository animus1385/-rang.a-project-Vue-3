export function buildVueLoader() {
    return {
        test: /\.vue$/,
        use: [
            {
                loader: 'vue-loader',
                options: {
                    hotReload: false, // disables Hot Reload
                },
            },
            {
                loader: 'vue-svg-inline-loader',

                options: {},
            },
           
        ],
    };
}

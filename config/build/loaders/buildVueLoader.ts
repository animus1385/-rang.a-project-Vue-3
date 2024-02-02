export function buildVueLoader() {
    return {
        test: /\.vue$/,
        use: [
            {
                loader: 'vue-loader',
            },
            {
                loader: 'vue-svg-inline-loader',
            },
        ],
    };
}

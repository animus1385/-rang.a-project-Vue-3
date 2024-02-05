export function buildSvgLoader() {
    return {
        test: /\.svg$/,
        oneOf: [
            {
                use: 'svg-inline-loader',
            },
            {
                use: 'url-loader',
            },
        ],
    };
}

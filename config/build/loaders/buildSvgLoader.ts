export function buildSvgLoader() {
    return {
        test: /\.svg$/,
        use: ['vue-svg-loader', '@svgr/webpack'],
    };
}

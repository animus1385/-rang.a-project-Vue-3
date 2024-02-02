import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
    return {
        test: /\.(s[ac]ss|css)$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'vue-style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader',
        ],
    };
}

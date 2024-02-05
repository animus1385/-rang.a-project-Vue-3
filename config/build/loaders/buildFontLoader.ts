
export function buildFontLoader() {
    return {
        test: /\.(woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/',
                },
            },
        ],
    };
}

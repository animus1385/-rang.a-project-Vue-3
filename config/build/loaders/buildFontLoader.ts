export function buildFontLoader() {
    return {
        test: /\.(woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    OutputPath: 'fonts',
                },
            },
        ],
    };
}

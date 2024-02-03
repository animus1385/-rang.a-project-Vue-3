export function buildTypescriptLoader() {
    return {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
            appendTsSuffixTo: [/\.vue$/],
        },
        exclude: /node_modules/,
    };
}

export function buildTypescriptLoader() {
    return {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        options: {
            appendTsSuffixTo: [/\.vue$/],
        },
        exclude: /node_modules/,
    };
}

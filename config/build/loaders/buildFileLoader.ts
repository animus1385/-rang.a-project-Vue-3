import path from 'path';
import { BuildOptions } from '../types/config';
export function buildFileLoader({ paths }: BuildOptions) {
    return {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    OutputPath: 'img/',
                },
            },
        ],
    };
}

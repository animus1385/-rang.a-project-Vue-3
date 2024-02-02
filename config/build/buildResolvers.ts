import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.ts', '.js', '.vue'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        alias: {
            '@': options.paths.src,
        },
    };
}

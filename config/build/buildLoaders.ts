import webpack from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildFileLoader } from './loaders/buildFileLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildTypescriptLoader } from './loaders/buildTypescriptLoader';
import { BuildOptions } from './types/config';
import { buildVueLoader } from './loaders/buildVueLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const babelLoader = buildBabelLoader();

    const fileLoader = buildFileLoader();

    const svgLoader = buildSvgLoader();

    const cssLoader = buildCssLoader(isDev);

    const typescriptLoader = buildTypescriptLoader();

    const vueLoader = buildVueLoader();

    return [svgLoader, vueLoader, fileLoader, typescriptLoader, babelLoader, cssLoader];
}

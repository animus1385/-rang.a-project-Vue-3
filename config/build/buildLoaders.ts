import webpack from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildFileLoader } from './loaders/buildFileLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildTypescriptLoader } from './loaders/buildTypescriptLoader';
import { BuildOptions } from './types/config';
import { buildVueLoader } from './loaders/buildVueLoader';
import { buildFontLoader } from './loaders/buildFontLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const babelLoader = buildBabelLoader();

    const fileLoader = buildFileLoader();

    const svgLoader = buildSvgLoader();

    const cssLoader = buildCssLoader(isDev);

    const typescriptLoader = buildTypescriptLoader();

    const vueLoader = buildVueLoader();

    const fontLoader = buildFontLoader();

    return [typescriptLoader, vueLoader, babelLoader, cssLoader, svgLoader, fontLoader, fileLoader ];
}

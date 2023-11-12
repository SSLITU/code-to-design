import type { StorybookConfig } from '@storybook/nextjs';
import { Configuration } from 'webpack';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
    {
      name: '@storybook/addon-styling-webpack',

      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  implementation: require.resolve('postcss'),
                },
              },
            ],
          },
        ],
      },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config: Configuration) => {
    // Update PostCSS Loader configuration to use postcssOptions
    config.module?.rules?.push(
      {
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('tailwindcss'), require('autoprefixer')],
              },
            },
          },
        ],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.module\.scss$/,
        use: [
          'style-loader', // Creates `style` nodes from JS strings
          {
            loader: 'css-loader', // Translates CSS into CommonJS
            options: {
              importLoaders: 1, // Number of loaders applied before CSS loader
              modules: true, // Enable CSS Modules
            },
          },
          {
            loader: 'sass-loader', // Compiles Sass to CSS
          },
        ],
        include: path.resolve(__dirname, '../'),
      },
    );
    return config;
  },
};

export default config;

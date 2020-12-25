import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const extensions = ['.ts'];

const babelRuntimeVersion = pkg.devDependencies['@babel/runtime'].replace(
  /^[^0-9]*/,
  ''
);

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'lib/index.js',
      format: 'cjs',
      indent: false
    },
    plugins: [
      typescript({ useTsconfigDeclarationDir: true }),
      babel({
        extensions,
        plugins: [
          ['@babel/plugin-transform-runtime', { version: babelRuntimeVersion }],
        ],
        runtimeHelpers: true,
      })
    ]
  }
]
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import reactHooks from 'eslint-plugin-react-hooks';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'prettier',
    ],
    plugins: ['prettier', 'react-hooks', 'import-x', 'sonarjs'],
    rules: {
      ...reactHooks.configs.recommended.rules,

      // Prettier
      'prettier/prettier': ['warn', { endOfLine: 'auto' }],

      // Console usage
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // TypeScript
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': 'warn',

      // Import order
      'import-x/named': 'error',
      'import-x/default': 'error',
      'import-x/no-duplicates': 'error',
      'import-x/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      // Unused vars — ignore `_`
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      // Sonar
      'sonarjs/no-duplicate-string': 'warn',

      // Prevent deeply relative imports
      'no-restricted-imports': [
        'error',
        {
          patterns: ['../*'],
        },
      ],
    },
    settings: {
      'import-x/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: ['./tsconfig.json'],
        },
      },
      react: {
        version: 'detect',
      },
    },
  }),
];

export default eslintConfig;

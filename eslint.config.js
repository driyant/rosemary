import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config(
  { ignores: ['dist'] },
  ...tseslint.configs.recommended,
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  { plugins: { 'react-hooks': reactHooks } },
  {
    plugins: { 'react-refresh': reactRefresh },
    rules: { 'react-refresh/only-export-components': 'warn' },
  },
  {
    // Aturan ini untuk menyinkronkan gaya kutip ESLint dengan Prettier.
    // Prettier ingin 'singleQuote', jadi kita set ESLint untuk tidak error
    // saat menemukan single quote.
    rules: {
      quotes: ['error', 'single'],
    },
  },
  // Letakkan prettierConfig di paling akhir
  // untuk menonaktifkan aturan yang konflik.
  prettierConfig
)

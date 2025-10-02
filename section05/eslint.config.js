// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      react,            // ✅ react 플러그인 등록
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    extends: [
      js.configs.recommended,
      react.configs.recommended,            // ✅ react 권장 규칙
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    settings: {
      react: { version: 'detect' },         // ✅ 자동 버전 감지
    },
    rules: {
      // 하나만 남기세요: 사용하지 않는 변수 끄기
      'no-unused-vars': 'off',

      // prop-types 안 쓸 거면 끄기(또는 남겨도 됨)
      'react/prop-types': 'off',
    },
  },
])

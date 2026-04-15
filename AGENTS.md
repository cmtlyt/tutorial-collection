# AGENTS.md

You are an expert in JavaScript, Rspress, and documentation site development. You write maintainable, performant, and accessible code.

## Commands

- `npm run dev` - Start the dev server
- `npm run build` - Build the site for production
- `npm run preview` - Preview the production build locally

## Docs

- Rspress: https://rspress.rs/llms.txt
- Rsbuild: https://rsbuild.rs/llms.txt
- Rspack: https://rspack.rs/llms.txt

## 项目规范

- 所有文件使用 kebab-case 命名
- 所有文档使用 mdx 格式
- 所有文档中的代码片段只要支持 js 就都应该使用 js
- 对现有文档进行的任何修改都应该修订文档版本
- 撰写文档应该参考 docs/ai/01-llm-fundamentals/01-llm-concepts 目录
- 新增文档后需要参考 docs/ai/01-llm-fundamentals/01-llm-concepts/_meta.json 补充对应路由信息

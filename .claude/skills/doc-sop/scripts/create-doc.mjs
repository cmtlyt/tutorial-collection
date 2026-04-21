#!/usr/bin/env node
/**
 * Create Document Script
 * Creates a new document with proper template structure based on DOCUMENTATION-SOP.md
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createDocument(filePath, topic, version = '1.0') {
  /**
   * Create a new document with standard template structure.
   * 
   * @param {string} filePath - Output file path (e.g., docs/ai/01-llm-fundamentals/01-llm-concepts/01-new-topic.mdx)
   * @param {string} topic - Document topic/title
   * @param {string} version - Version number (default: "1.0")
   */
  
  // Validate path
  if (!filePath.endsWith('.mdx')) {
    console.error('Error: File must have .mdx extension');
    process.exit(1);
  }
  
  // Check if file already exists
  if (fs.existsSync(filePath)) {
    console.error(`Error: File already exists at ${filePath}`);
    process.exit(1);
  }
  
  // Create directory if needed
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Get current date
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Generate template content
  const template = `# ${topic}

> **版本**: v${version}  
> **最后更新**: ${currentDate}

## 📚 概念介绍

简要介绍本节要讲解的核心概念

## 🎯 主题一

### 子主题

\`\`\`js
// 完整的代码示例
import { Effect } from 'effect'

const program = Effect.gen(function* () {
  // 完整的实现逻辑
  return result
})

Effect.runSync(program)
\`\`\`

## 📝 实际应用示例

### 综合示例

\`\`\`js
// 完整的综合应用示例
\`\`\`

## 🔗 相关概念

- **相关概念1**: 简要说明
- **相关概念2**: 简要说明

## 📚 学习检查点

- [ ] 学习点1
- [ ] 学习点2

## 🚀 下一步

→ [下一文档](./next-doc.mdx)
`;
  
  // Write file
  fs.writeFileSync(filePath, template, 'utf-8');
  
  console.log(`✓ Document created successfully at ${filePath}`);
  console.log(`✓ Topic: ${topic}`);
  console.log(`✓ Version: v${version}`);
  console.log(`✓ Date: ${currentDate}`);
  console.log('\nNext steps:');
  console.log('1. Edit the document with your content');
  console.log('2. Update _meta.json if needed');
  console.log('3. Verify all code examples are complete and runnable');
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 3) {
    console.log('Usage: node create-doc.mjs <path> --topic "<topic>" [--version <version>]');
    console.log('');
    console.log('Arguments:');
    console.log('  path              Output file path (e.g., docs/ai/01-llm-fundamentals/01-llm-concepts/01-new-topic.mdx)');
    console.log('  --topic TOPIC     Document topic/title (required)');
    console.log('  --version VERSION Version number (default: 1.0)');
    console.log('');
    console.log('Example:');
    console.log('  node create-doc.mjs docs/ai/01-llm-fundamentals/01-llm-concepts/01-new-topic.mdx --topic "New Topic" --version "1.0"');
    process.exit(1);
  }
  
  const filePath = args[0];
  let topic = '';
  let version = '1.0';
  
  for (let i = 1; i < args.length; i++) {
    if (args[i] === '--topic' && i + 1 < args.length) {
      topic = args[i + 1];
      i++;
    } else if (args[i] === '--version' && i + 1 < args.length) {
      version = args[i + 1];
      i++;
    }
  }
  
  if (!topic) {
    console.error('Error: --topic is required');
    process.exit(1);
  }
  
  createDocument(filePath, topic, version);
}

main();

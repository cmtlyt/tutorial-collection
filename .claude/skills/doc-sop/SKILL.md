---
name: doc-sop
description: "Standard Operating Procedure for writing and editing documentation. Ensures complete, runnable code examples, no TODOs, no simplified implementations, consistent formatting, and proper version control. Use when user wants to write a document, create a new doc, edit a doc, update documentation, write documentation following SOP, create documentation with complete examples. Triggers: 'write doc', 'create document', 'edit doc', 'update doc', 'write documentation', 'create new doc', 'help me write a doc', 'document writing', 'documentation SOP', 'follow SOP to write'."
---

# Documentation SOP Skill

IRON LAW: **Every code example must be complete and runnable. Never leave TODOs, simplified implementations, or placeholder code.**

## Workflow Checklist

- [ ] Step 1: Understand Requirements ⚠️ REQUIRED
  - [ ] 1.1 Clarify document topic and scope
  - [ ] 1.2 Identify target audience and directory
  - [ ] 1.3 Confirm file path and naming (kebab-case .mdx)
- [ ] Step 2: Plan Content
  - [ ] 2.1 List core concepts to explain
  - [ ] 2.2 Design document structure
  - [ ] 2.3 Plan code examples (must be complete and runnable)
- [ ] Step 3: Write Content
  - [ ] 3.1 Write concept introduction
  - [ ] 3.2 Write complete code examples
  - [ ] 3.3 Provide practical application scenarios
  - [ ] 3.4 Add learning checkpoints
  - [ ] 3.5 Add next steps
- [ ] Step 4: Quality Check ⚠️ REQUIRED
  - [ ] 4.1 No incomplete implementations
  - [ ] 4.2 No TODO/FIXME markers
  - [ ] 4.3 No simplified implementations
  - [ ] 4.4 No assumed implementations
  - [ ] 4.5 All code examples runnable
- [ ] Step 5: Create/Update File
  - [ ] 5.1 Create file with kebab-case naming
  - [ ] 5.2 Update _meta.json if needed
  - [ ] 5.3 Verify file creation
- [ ] Step 6: Version Control (Edit Only)
  - [ ] 6.1 Update version number (v1.0 → v1.1)
  - [ ] 6.2 Update last modified date
  - [ ] 6.3 Verify changes

## Step 1: Understand Requirements ⚠️ REQUIRED

Ask the user:
- What is the document topic?
- Which directory should it be in?
- What are the key concepts to cover?

Load references/sop-core.md for core principles.

## Step 2: Plan Content

Based on requirements:
1. List core concepts (3-7 concepts typically)
2. Design structure: concept → code → application → checkpoint → next
3. Plan code examples: each concept needs at least one complete example

Load references/structure-guide.md for template patterns.

## Step 3: Write Content

Follow standard template:

```markdown
# 文档标题

> **版本**: v1.0  
> **最后更新**: YYYY-MM-DD

## 📚 概念介绍

简要介绍本节要讲解的核心概念

## 🎯 主题一

### 子主题

\```js
// 完整的代码示例
import { Effect } from 'effect'

const program = Effect.gen(function* () {
  // 完整的实现逻辑
  return result
})

Effect.runSync(program)
\```

## 📝 实际应用示例

### 综合示例

\```js
// 完整的综合应用示例
\```

## 🔗 相关概念

- **相关概念1**: 简要说明
- **相关概念2**: 简要说明

## 📚 学习检查点

- [ ] 学习点1
- [ ] 学习点2

## 🚀 下一步

→ [下一文档](./next-doc.mdx)
```

Load references/code-style-guide.md for code formatting rules.

## Step 4: Quality Check ⚠️ REQUIRED

CRITICAL: Verify these before proceeding:

1. **No incomplete implementations**: All code has imports and execution
2. **No TODO markers**: No TODO, FIXME, or similar
3. **No simplified implementations**: No "// implementation omitted"
4. **No assumed implementations**: All functions/variables defined
5. **All code runnable**: Can copy-paste and run

Load references/quality-checklist.md for detailed checks.

**CONFIRMATION GATE**: Before creating file, ask user: "Ready to create document? All code examples are complete and runnable."

## Step 5: Create/Update File

### Creating New Document

1. Use `create_file` tool
2. Ensure filename uses kebab-case
3. Ensure extension is `.mdx`
4. Place in correct directory

### Updating _meta.json

Load references/meta-config-guide.md for proper format:

**Chapter-level** (contains subdirectories):
```json
[
  {
    "type": "dir",
    "name": "01-subsection",
    "label": "1.1 Subsection Title",
    "collapsed": true
  }
]
```

**Document-level** (contains docs):
```json
[
  "01-document1",
  "02-document2"
]
```

**CONFIRMATION GATE**: After creating, ask user: "Document created. Would you like me to verify it's correct?"

## Step 6: Version Control (Edit Only)

When editing existing document:

1. Read current version number
2. Increment version (v1.0 → v1.1)
3. Update "Last Updated" to current date
4. Apply changes
5. Verify version updated

## Anti-Patterns

❌ **NEVER**:
- Leave TODO or FIXME markers
- Use "// ... implementation omitted"
- Write code without imports
- Assume functions exist without defining them
- Write partial code examples
- Skip version number updates when editing
- Create files without .mdx extension
- Use camelCase or PascalCase in filenames

✅ **ALWAYS**:
- Write complete, runnable code
- Include all imports
- Define all referenced functions
- Use kebab-case for filenames
- Use .mdx extension
- Update version number on edits
- Update last modified date
- Verify code runs independently

## Pre-Delivery Checklist

### Structure
- [ ] Filename uses kebab-case
- [ ] File extension is .mdx
- [ ] File path matches directory structure
- [ ] _meta.json updated if needed

### Content
- [ ] Version number present
- [ ] Last updated date present
- [ ] Concept introduction included
- [ ] Complete code examples included
- [ ] Practical application provided
- [ ] Related concepts listed
- [ ] Learning checkpoints included
- [ ] Next steps provided

### Quality
- [ ] No incomplete implementations
- [ ] No TODO/FIXME markers
- [ ] No simplified implementations
- [ ] No assumed implementations
- [ ] All code runnable
- [ ] Code has proper imports
- [ ] Code has execution statements

### Version Control (Edit Only)
- [ ] Version number incremented
- [ ] Last updated date changed
- [ ] Changes verified

## Scripts

### Create Document Template

```bash
node scripts/create-doc.mjs <path> --topic "<topic>" --version "1.0"
```

Creates a new document with proper template structure.

### Validate Document

```bash
node scripts/validate-doc.mjs <path-to-doc>
```

Validates document against quality checklist.

## References

Load these as needed:

- **sop-core.md**: Core principles and quality standards
- **structure-guide.md**: Document structure and templates
- **code-style-guide.md**: Code formatting rules
- **meta-config-guide.md**: _meta.json configuration patterns
- **quality-checklist.md**: Detailed quality checks

Load references/architecture-guide.md for progressive loading patterns.

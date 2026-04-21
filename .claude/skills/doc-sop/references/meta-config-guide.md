# Meta Configuration Guide

## Chapter-Level _meta.json

Use for chapters that contain subdirectories:

```json
[
  {
    "type": "dir",
    "name": "01-subsection",
    "label": "1.1 Subsection Title",
    "collapsed": true
  },
  {
    "type": "dir",
    "name": "02-subsection",
    "label": "1.2 Subsection Title",
    "collapsed": true
  }
]
```

**Fields**:
- `type`: "dir" for subdirectories
- `name`: Directory name (kebab-case)
- `label`: Display title (numbered)
- `collapsed`: Whether to collapse by default

## Document-Level _meta.json

Use for directories that contain documents:

```json
[
  "01-document1",
  "02-document2",
  "03-document3"
]
```

**Rules**:
- Use string array (not objects)
- Include filename without extension
- Use kebab-case naming
- Maintain alphabetical/numerical order

## Naming Conventions

- Directories: kebab-case (e.g., `01-code-style`)
- Files: kebab-case (e.g., `01-document1.mdx`)
- Labels: Numbered (e.g., "1.1 Subsection Title")

## Updating _meta.json

When adding a new document:
1. Read existing _meta.json
2. Add new entry in correct position
3. Maintain order (numerical/alphabetical)
4. Use file_replace to update

## Example: Adding a Document

```json
// Before
[
  "01-existing-doc",
  "03-another-doc"
]

// After
[
  "01-existing-doc",
  "02-new-doc",
  "03-another-doc"
]
```

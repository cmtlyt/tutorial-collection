# Architecture Guide

## Progressive Loading Strategy

Load references only when needed to minimize token usage.

### When to Load

**Always Load First**:
- `sop-core.md` - Core principles (Step 1)

**Load as Needed**:
- `structure-guide.md` - When planning document structure (Step 2)
- `code-style-guide.md` - When writing code examples (Step 3)
- `quality-checklist.md` - When performing quality checks (Step 4)
- `meta-config-guide.md` - When updating _meta.json (Step 5)

**Load for Reference**:
- `architecture-guide.md` - When designing new workflows or patterns

## Resource Organization

### Scripts

Encapsulate deterministic, repeatable operations:
- Execute without loading into context
- Major token savings
- Test every script before packaging

### References

Organize by domain, not by type:
- One level of nesting only
- Each file referenced with clear "when to load" instructions
- Large files (>100 lines) should have table of contents

### Assets

Templates, images, fonts used in output:
- Not loaded into context
- Just referenced by path

## Directory Structure

```
doc-sop/
├── SKILL.md              # Main skill file (<500 lines)
├── scripts/              # Deterministic operations
│   ├── create_doc.py
│   └── validate_doc.py
├── references/           # Domain knowledge (one level deep)
│   ├── sop-core.md
│   ├── structure-guide.md
│   ├── code-style-guide.md
│   ├── meta-config-guide.md
│   ├── quality-checklist.md
│   └── architecture-guide.md
└── assets/               # Output templates
    └── template.mdx
```

## Token Optimization

1. **Keep SKILL.md under 500 lines**
2. **Load references progressively**
3. **Use scripts for deterministic operations**
4. **Don't load assets into context**
5. **One level of nesting in references**

## Best Practices

- Test scripts before packaging
- Document only command and arguments in SKILL.md
- Use clear "when to load" instructions
- Organize by domain, not by type
- Keep references focused and concise

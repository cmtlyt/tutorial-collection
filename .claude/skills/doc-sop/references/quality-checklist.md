# Quality Checklist

## Before File Creation

- [ ] Confirm filename uses kebab-case
- [ ] Confirm file extension is `.mdx`
- [ ] Confirm file path matches project structure

## After File Creation

- [ ] Check for incomplete implementations
- [ ] Check for TODO/FIXME markers
- [ ] Check for simplified implementations
- [ ] Check for assumed implementations
- [ ] Check all code examples are runnable
- [ ] Check compliance with project standards

## Before File Editing

- [ ] Use `read_file` to read file content
- [ ] Confirm content to modify
- [ ] Avoid modifying original content unnecessarily

## After File Editing

- [ ] Check modifications are correct
- [ ] Check for new issues introduced
- [ ] Check format consistency
- [ ] **Confirm version number updated**
- [ ] **Confirm update date updated**

## Detailed Code Checks

### Completeness

- [ ] All code has imports
- [ ] All code has execution statements
- [ ] All functions are defined
- [ ] All variables are declared
- [ ] No placeholder code

### Runnability

- [ ] Code can be copied and run
- [ ] No missing dependencies
- [ ] No undefined references
- [ ] No syntax errors
- [ ] No runtime errors expected

### Quality

- [ ] Clear variable names
- [ ] Meaningful comments
- [ ] Proper error handling
- [ ] Consistent formatting
- [ ] Follows style guide

## Content Checks

- [ ] Version number present
- [ ] Last updated date present
- [ ] Concept introduction included
- [ ] Complete code examples included
- [ ] Practical application provided
- [ ] Related concepts listed
- [ ] Learning checkpoints included
- [ ] Next steps provided

## Structure Checks

- [ ] Filename uses kebab-case
- [ ] File extension is .mdx
- [ ] File path matches directory structure
- [ ] _meta.json updated if needed
- [ ] Proper markdown formatting
- [ ] Proper code block formatting

## Version Control Checks (Edit Only)

- [ ] Version number incremented
- [ ] Last updated date changed
- [ ] Changes verified
- [ ] No unintended modifications

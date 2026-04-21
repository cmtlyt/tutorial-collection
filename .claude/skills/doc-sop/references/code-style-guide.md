# Code Style Guide

## Code Format

- Use JavaScript (unless TypeScript is explicitly requested)
- All code examples must be complete and runnable
- Use `import { Effect } from 'effect'` for imports
- Use `Effect.runSync()` or `Effect.runPromise()` for execution

## Code Example Template

```js
import { Effect } from 'effect'

// Brief description of what this code does
const program = Effect.gen(function* () {
  // Complete implementation logic
  const data = yield* fetchData()
  const processed = yield* processData(data)
  return processed
})

Effect.runSync(program)
```

## Code Comments

- Add comments for critical logic
- Use `//` for single-line comments
- Comments should be concise and explain "why" not "what"

## Quality Standards

1. **Completeness**: All code must include imports and execution
2. **Readability**: Use clear variable names and comments
3. **Practicality**: Provide valuable examples
4. **Consistency**: Use unified code style

## Common Patterns

### Effect.gen Pattern

```js
import { Effect } from 'effect'

const program = Effect.gen(function* () {
  // Step 1
  const result1 = yield* operation1()
  
  // Step 2
  const result2 = yield* operation2(result1)
  
  return result2
})

Effect.runSync(program)
```

### Error Handling Pattern

```js
import { Effect } from 'effect'

const program = Effect.gen(function* () {
  const result = yield* operation().pipe(
    Effect.catchAll(error => 
      Effect.fail(new Error(`Failed: ${error}`))
    )
  )
  return result
})

Effect.runSync(program)
```

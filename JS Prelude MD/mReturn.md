```js
// Not required in JS, which has first functions by default.
// Included only for comparison with AS, which has to derive
// first class functions by lifting 'handlers' into 'scripts'
// as anonymous |λ|() functions.

// In JS, mReturn is just an alternate name for id.
```

```js
// mReturn :: First-class m => (a -> b) -> m (a -> b)
const mReturn = id;
```
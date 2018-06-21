```js
// Not required in JS, which has first functions by default
// Included for comparison with AS, which can only obtain
// first class functions by lifting 'handlers' into 'scripts'
// as anonymous |λ|() functions.

// Here Just an alternative name for id.
```

```js
// mReturn :: First-class m => (a -> b) -> m (a -> b)
const mReturn = id;
```
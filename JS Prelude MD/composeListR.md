```javascript
// composeListR :: [(a -> a)] -> (a -> a)
const composeListR = fs =>
    x => fs.reduce((a, f) => f(a), x);
```
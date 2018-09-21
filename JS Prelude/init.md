```js
// init :: [a] -> [a]
const init = xs =>
    0 < xs.length ? (
        xs.slice(0, -1)
    ) : undefined;
```
```js
// init :: [a] -> [a]
const init = xs => xs.length > 0 ? xs.slice(0, -1) : undefined;
```
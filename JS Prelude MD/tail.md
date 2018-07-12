```js
// tail :: [a] -> [a]
const tail = xs => 0 < xs.length ? xs.slice(1) : [];
```
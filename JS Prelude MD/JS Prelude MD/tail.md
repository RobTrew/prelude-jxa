```js
// tail :: [a] -> [a]
const tail = xs => xs.length > 0 ? xs.slice(1) : [];
```
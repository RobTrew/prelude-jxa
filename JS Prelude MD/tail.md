```js
// tail :: [a] -> [a]
const tail = xs =>
    // A new list consisting of all
    // items of xs except the first.
    0 < xs.length ? xs.slice(1) : [];
```
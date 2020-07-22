```js
// append (++) :: [a] -> [a] -> [a]
const append = xs =>
    // A list obtained by the
    // concatenation of two others.
    ys => [...xs].concat([...ys]);
```
```js
// last :: [a] -> a
const last = xs =>
    // The last item of a list.
    0 < xs.length ? xs.slice(-1)[0] : undefined;
```
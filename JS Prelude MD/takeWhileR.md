```js
// takeWhileR :: (a -> Bool) -> [a] -> [a]
const takeWhileR = p => xs => {
    let i = xs.length;
    while (i-- && p(xs[i])) {}
    return xs.slice(i + 1);
};
```
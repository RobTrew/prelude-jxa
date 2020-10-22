```js
// takeAround :: (a -> Bool) -> [a] -> [a]
const takeAround = p => xs => {
    const ys = takeWhile(p)(xs);
    return ys.length < xs.length ? (
        ys.concat(takeWhileR(p)(xs))
    ) : ys;
};
```
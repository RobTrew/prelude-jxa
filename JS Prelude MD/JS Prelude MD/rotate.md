```js
// rotate :: Int -> [a] -> [a]
const rotate = (n, xs) => {
    const lng = xs.length;
    return lng > 0 ? takeDropCycle(lng, n, xs) : [];
};
```
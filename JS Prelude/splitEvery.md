```js
// splitEvery :: Int -> [a] -> [[a]]
const splitEvery = (n, xs) => {
    if (xs.length <= n) return [xs];
    const [h, t] = [xs.slice(0, n), xs.slice(n)];
    return [h].concat(splitEvery(n, t));
};
```
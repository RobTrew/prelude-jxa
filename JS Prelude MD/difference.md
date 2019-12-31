```js
// difference :: Eq a => [a] -> [a] -> [a]
const difference = xs =>
    ys => {
        const s = new Set(ys);
        return xs.filter(x => !s.has(x));
    };
```
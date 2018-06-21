```js
// truncate :: Num -> Int
const truncate = x => {
    const [m, _] = properFraction(x);
    return m;
};
```
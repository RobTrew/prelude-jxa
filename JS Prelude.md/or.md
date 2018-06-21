```js
// or :: [Bool] -> Bool
const or = xs => {
    let i = xs.length;
    while (i--)
        if (xs[i]) return true;
    return false;
};
```
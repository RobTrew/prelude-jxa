```js
// | The conjunction of a container of Bools. 
// True unless any contained value is false.
```

```js
// and :: [Bool] -> Bool
const and = xs => {
    let i = xs.length;
    while (i--)
        if (!xs[i]) return false;
    return true;
};
```
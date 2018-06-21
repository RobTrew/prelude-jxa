```js
// floor :: Num -> Int
const floor = x => {
    const
      nr = properFraction(x),
      n = nr[0];
    return nr[1] < 0 ? n - 1 : n;
};
```
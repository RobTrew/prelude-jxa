```js
// The least integer not less than x
```

```js
// ceiling :: Num -> Int
const ceiling = x => {
    const
      nr = properFraction(x),
      n = nr[0]
    return 0 < nr[1] ? 1 + n : n;
};
```
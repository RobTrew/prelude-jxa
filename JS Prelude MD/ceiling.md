```js
// The least integer not less than x
```

```js
// ceiling :: Num -> Int
const ceiling = x => {
    const
      nr = properFraction(x),
      n = nr[0]
    return nr[1] > 0 ? n + 1 : n;
};
```
```applescript
-- truncate :: Num -> Int
on truncate(x)
    item 1 of properFraction(x)
end truncate
```

```js
// truncate :: Num -> Int
const truncate = x => {
    const [m, _] = properFraction(x);
    return m;
};
```
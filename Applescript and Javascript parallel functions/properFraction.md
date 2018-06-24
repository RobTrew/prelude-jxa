```applescript
-- properFraction :: Real -> (Int, Real)
on properFraction(n)
    set i to (n div 1)
    Tuple(i, n - i)
end properFraction
```

```js
// properFraction :: Real -> (Int, Real)
const properFraction = n => {
    const i = Math.floor(n) + (n < 0 ? 1 : 0);
    return Tuple(i, n - i);
};
```
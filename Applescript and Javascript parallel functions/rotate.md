```applescript
-- rotate :: Int -> [a] -> [a]
on rotate(n, xs)
    set lng to |length|(xs)
    if missing value is not lng then
        take(lng, drop(lng - n, cycle(xs)))
    else
        lng
    end if
end rotate
```

```js
// rotate :: Int -> [a] -> [a]
const rotate = (n, xs) => {
    const lng = xs.length;
    return Infinity > lng ? (
        take(lng, drop(lng - n, cycle(xs)))
    ) : undefined;
};
```
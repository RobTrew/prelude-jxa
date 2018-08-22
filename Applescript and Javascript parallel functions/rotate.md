```applescript
-- rotate :: Int -> [a] -> [a]
on rotate(n, xs)
    set lng to length of xs
    if 0 > n then
        set d to (-n) mod lng
    else
        set d to lng - (n mod lng)
    end if
    drop(d, xs) & take(d, xs)
end rotate
```

```js
// rotate :: Int -> [a] -> [a]
const rotate = (n, xs) => {
    const
        lng = xs.length,
        d = 0 > n ? (
            (-n) % lng
        ) : lng - (n % lng);
    return drop(d, xs).concat(take(d, xs));
};
```
```applescript
-- rotate :: Int -> [a] -> [a]
on rotate(n, xs)
    set lng to length of xs
    if lng > 0 then
        takeDropCycle(lng, n, xs)
    else
        {}
    end if
end rotate
```

```js
// rotate :: Int -> [a] -> [a]
const rotate = (n, xs) => {
    const lng = xs.length;
    return lng > 0 ? takeDropCycle(lng, n, xs) : [];
};
```
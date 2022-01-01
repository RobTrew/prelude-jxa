```javascript
// shift :: Int -> [a] -> [a]
const shift = n => xs => {
    const lng = length(xs);

    return Infinity > lng ? (
        take(lng)(
            drop(n)(cycle(xs))
        )
    ) : (drop(n)(xs), xs);
};
```


```applescript
-- shift :: Int -> [a] -> [a]
on shift(n, xs)
    set lng to |length|(xs)
    if missing value is not lng then
        take(lng, drop(n, cycle(xs)))
    else
        drop(n, xs)
    end if
end shift
```
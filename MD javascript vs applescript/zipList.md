```applescript
-- zipList :: [a] -> [b] -> [(a, b)]
on zipList(xs, ys)
    set lng to min(length of xs, length of ys)
    script go
        on |λ|(x, i)
            Tuple(x, item i of ys)
        end |λ|
    end script
    map(go, items 1 thru lng of xs)
end zipList
```


```javascript
// zipList :: [a] -> [b] -> [(a, b)]
const zipList = xs => ys => {
    const
        n = Math.min(length(xs), length(ys)),
        vs = take(n)(list(ys));
    return take(n)(list(xs))
        .map((x, i) => Tuple(x)(vs[i]));
};
```
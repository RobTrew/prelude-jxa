```applescript
-- lefts :: [Either a b] -> [a]
on lefts(xs)
    script
        on |λ|(x)
            if class of x is record then
                set ks to keys(x)
                ks contains "type" and ks contains "Left"
            else
                false
            end if
        end |λ|
    end script
    filter(result, xs)
end lefts
```

```js
// lefts :: [Either a b] -> [a]
const lefts = xs =>
    concatMap(
        x => ('Either' === x.type) && (undefined !== x.Left) ? (
            [x.Left]
        ) : [], xs
    );
```
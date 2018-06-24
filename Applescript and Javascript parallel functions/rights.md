```applescript
-- rights :: [Either a b] -> [b]
on rights(xs)
    script
        on |λ|(x)
            if class of x is record then
                set ks to keys(x)
                ks contains "type" and ks contains "Right"
            else
                false
            end if
        end |λ|
    end script
    filter(result, xs)
end rights
```

```js
// rights :: [Either a b] -> [b]
const rights = xs =>
    concatMap(
        x => ('Either' === x.type) && (undefined !== x.Right) ? (
            [x.Right]
        ) : [], xs
    );
```
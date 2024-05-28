```applescript
-- lefts :: [Either a b] -> [a]
on lefts(xs)
    script go
        on |λ|(x)
            if class of x is record then
                set ks to keys(x)
                if ks contains "type" and ks contains "Left" then
                    {x}
                else
                    {}
                end if
            else
                {}
            end if
        end |λ|
    end script
    concatMap(go, xs)
end lefts
```


```javascript
// lefts :: [Either a b] -> [a]
const lefts = xs =>
    xs.flatMap(
        x => ("Left" in x)
            ? [x.Left]
            : []
    );
```
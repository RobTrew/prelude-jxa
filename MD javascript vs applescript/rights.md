```applescript
-- rights :: [Either a b] -> [b]
on rights(xs)
    script
        on |λ|(x)
            if class of x is record then
                set ks to keys(x)
                if ks contains "type" and ks contains "Right" then
                    {|Right| of x}
                else
                    {}
                end if
            else
                {}
            end if
        end |λ|
    end script
    concatMap(result, xs)
end rights
```


```javascript
// rights :: [Either a b] -> [b]
const rights = xs =>
    xs.flatMap(
        x => ("Right" in x) ? [
            x.Right
        ] : []
    );
```
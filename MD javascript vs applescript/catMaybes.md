```applescript
-- catMaybes :: [Maybe a] -> [a]
on catMaybes(mbs)
    script emptyOrListed
        on |λ|(m)
            if Nothing of m then
                {}
            else
                {Just of m}
            end if
        end |λ|
    end script
    concatMap(emptyOrListed, mbs)
end catMaybes
```


```javascript
// catMaybes :: [Maybe a] -> [a]
const catMaybes = mbs =>
    mbs.flatMap(
        m => m.Nothing
            ? []
            : [m.Just]
    );
```
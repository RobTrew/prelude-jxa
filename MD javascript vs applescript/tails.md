```javascript
// tails :: [a] -> [[a]]
const tails = xs =>
    xs.map((_, i) => xs.slice(i))
    .concat([
        []
    ]);
```


```applescript
-- tails :: [a] -> [[a]]
on tails(xs)
    if class of xs is text then
        set es to characters of xs
    else
        set es to xs
    end if
    script residue
        on |λ|(_, i)
            items i thru -1 of es
        end |λ|
    end script
    map(residue, es) & {{}}
end tails
```
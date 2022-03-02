```javascript
// allSame :: [a] -> Bool
const allSame = xs =>
    // True if xs has less than 2 items, or every item
    // in the tail of the list is identical to the head.
    2 > xs.length || (() => {
        const [h, ...t] = xs;

        return t.every(x => h === x);
    })();
```


```applescript
-- allSame :: [a] -> Bool
on allSame(xs)
    if 2 > length of xs then
        true
    else
        script p
            property h : item 1 of xs
            on |λ|(x)
                h = x
            end |λ|
        end script
        all(p, rest of xs)
    end if
end allSame
```
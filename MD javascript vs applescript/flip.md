```javascript
// flip :: (a -> b -> c) -> b -> a -> c
const flip = op =>
    // The binary function op with
    // its arguments reversed.
    1 !== op.length
        ? (a, b) => op(b, a)
        : (a => b => op(b)(a));
```


```applescript
-- flip :: (a -> b -> c) -> b -> a -> c
on flip(f)
    script
        property g : mReturn(f)
        on |λ|(x, y)
            g's |λ|(y, x)
        end |λ|
    end script
end flip
```
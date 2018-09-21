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

```js
// flip :: (a -> b -> c) -> b -> a -> c
const flip = f =>
    1 < f.length ? (
        (a, b) => f(b, a)
    ) : (x => y => f(y)(x));
```
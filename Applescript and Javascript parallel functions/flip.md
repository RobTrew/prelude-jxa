```applescript
-- flip :: (a -> b -> c) -> b -> a -> c
on flip(f)
    script
        property g : f
        on |λ|(x, y)
            g(y, x)
        end |λ|
    end script
end flip
```

```js
// flip :: (a -> b -> c) -> b -> a -> c
const flip = f => (a, b) => f.apply(null, [b, a]);
```
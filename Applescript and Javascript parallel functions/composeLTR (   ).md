```applescript
-- composeLTR (>>>) :: (a -> b) -> (b -> c) -> a -> c
on composeLTR(f, g)
    script
        on |λ|(x)
            |λ|(|λ|(x) of mReturn(f)) of mReturn(g)
        end |λ|
    end script
end compose
```

```js
// composeLTR (>>>) :: (a -> b) -> (b -> c) -> a -> c
const composeLTR = (f, g) => x => f(g(x));
```
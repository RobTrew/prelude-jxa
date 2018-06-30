```applescript
-- compose2 (>>>) :: (a -> b) -> (b -> c) -> a -> c
on compose2(f, g)
    script
        on |λ|(x)
            |λ|(|λ|(x) of mReturn(f)) of mReturn(g)
        end |λ|
    end script
end compose
```

```js
// compose2 (>>>) :: (a -> b) -> (b -> c) -> a -> c
const compose2 = (f, g) => x => f(g(x));
```
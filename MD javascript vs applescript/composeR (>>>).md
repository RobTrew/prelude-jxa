```javascript
// composeR (>>>) :: (a -> b) -> (b -> c) -> a -> c
const composeR = f =>
    g => x => f(g(x));
```


```applescript
-- composeR (>>>) :: (a -> b) -> (b -> c) -> a -> c
on composeR(f, g)
    script
        on |λ|(x)
            |λ|(|λ|(x) of mReturn(f)) of mReturn(g)
        end |λ|
    end script
end composeR
```
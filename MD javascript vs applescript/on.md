```javascript
// on :: (b -> b -> c) -> (a -> b) -> a -> a -> c
const on = f =>
    // e.g. groupBy(on(eq)(length))
    g => a => b => f(g(a))(g(b));
```


```applescript
-- on :: (b -> b -> c) -> (a -> b) -> a -> a -> c
on |on|(f, g)
    -- e.g. sortBy(|on|(compare, |length|), ["epsilon", "mu", "gamma", "beta"])
    script
        on |λ|(a, b)
            tell mReturn(g) to set {va, vb} to {|λ|(a), |λ|(b)}
            tell mReturn(f) to |λ|(va, vb)
        end |λ|
    end script
end |on|
```
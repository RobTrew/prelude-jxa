```javascript
// bimap :: (a -> b) -> (c -> d) -> (a, c) -> (b, d)
const bimap = f =>
    // Tuple instance of bimap.
    // A tuple of the application of f and g to the
    // first and second values respectively.
    g => ([a, b]) => Tuple(f(a))(g(b));
```


```applescript
-- bimap :: (a -> b) -> (c -> d) -> (a, c) -> (b, d)
on bimap(f, g)
    -- Tuple instance of bimap.
    -- A tuple of the application of f and g to the
    -- first and second values of tpl respectively.
    script
        on |λ|(x)
            {|λ|(fst(x)) of mReturn(f), ¬
                |λ|(snd(x)) of mReturn(g)}
        end |λ|
    end script
end bimap
```
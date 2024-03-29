```javascript
// fanArrow (&&&) ::
// (a -> b) -> (a -> c) -> (a -> (b, c))
const fanArrow = f =>
    // A combined function, given f and g,
    // from x to a tuple of (f(x), g(x))
    // ((,) . f <*> g)
    g => x => Tuple(f(x))(
        g(x)
    );
```


```applescript
-- fanArrow (&&&) :: (a -> b) -> (a -> c) -> (a -> (b, c))
on fanArrow(f, g)
    -- Compose a function from a simple value to a tuple of
    -- the separate outputs of two different functions
    script
        on |λ|(x)
            Tuple(mReturn(f)'s |λ|(x), mReturn(g)'s |λ|(x))
        end |λ|
    end script
end fanArrow
```
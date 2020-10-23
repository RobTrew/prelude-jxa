```applescript
-- Compose a function from a simple value to a tuple of
-- the separate outputs of two different functions
-- fanArrow (&&&) :: (a -> b) -> (a -> c) -> (a -> (b, c))
on fanArrow(f, g)
    script
        on |λ|(x)
            Tuple(mReturn(f)'s |λ|(x), mReturn(g)'s |λ|(x))
        end |λ|
    end script
end fanArrow
```


```javascript
// fanArrow (&&&) :: (a -> b) -> (a -> c) -> (a -> (b, c))
const fanArrow = f =>
    // A function from x to a tuple of (f(x), g(x))
    // ((,) . f <*> g)
    g => x => Tuple(f(x))(
        g(x)
    );
```
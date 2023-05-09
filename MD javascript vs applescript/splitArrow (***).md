```javascript
// splitArrow (***) :: (a -> b) -> (c -> d) -> ((a, c) -> (b, d))
const splitArrow = f =>
    // The functions f and g combined in a single function
    // from a tuple (x, y) to a tuple of (f(x), g(y))
    // (see bimap)
    g => ([a, b]) => Tuple(
        f(a)
    )(
        g(b)
    );
```


```applescript
-- splitArrow (***) :: (a -> b) -> (c -> d) -> ((a, c) -> (b, d))
on splitArrow(f, g)
    -- Compose a function (from a tuple to a tuple), 
    -- (with separate transformations for fst and snd)
    script
        on |λ|(xy)
            Tuple(mReturn(f)'s |λ|(|1| of xy), mReturn(g)'s |λ|(|2| of xy))
        end |λ|
    end script
end splitArrow
```
```javascript
// second :: (a -> b) -> ((c, a) -> (c, b))
const second = f =>
    // A function over a simple value lifted
    // to a function over a tuple.
    // f (a, b) -> (a, f(b))
    ([x, y]) => Tuple(x)(f(y));
```


```applescript
-- second :: (a -> b) -> ((c, a) -> (c, b))
on |second|(f)
-- Lift a simple function to one which applies to a tuple, 
-- transforming only the second item of that tuple
    script
        on |λ|(xy)
            Tuple(|1| of xy, mReturn(f)'s |λ|(|2| of xy))
        end |λ|
    end script
end |second|
```
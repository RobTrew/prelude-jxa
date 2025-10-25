```javascript
// first :: (a -> b) -> ((a, c) -> (b, c))
const first = f =>
    // A function over a simple value lifted
    // to a function over a tuple, with f
    // applied to the first term.
    // f (a, b) -> (f(a), b)
    ([x, y]) => Tuple(f(x))(y);
```


```applescript
-- first :: (a -> b) -> ((a, c) -> (b, c))
on |first|(f)
   -- A simple function lifted to one which applies to a tuple, 
   -- transforming only the first item of that tuple
    script
        on |λ|(xy)
            Tuple(mReturn(f)'s |λ|(|1| of xy), |2| of xy)
        end |λ|
    end script
end |first|
```
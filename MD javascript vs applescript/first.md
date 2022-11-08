```javascript
// first :: (a -> b) -> ((a, c) -> (b, c))
const first = f =>
    // A simple function lifted to one which applies
    // to a tuple, transforming only its first item.
    xy => [f(xy[0]), xy[1]];
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
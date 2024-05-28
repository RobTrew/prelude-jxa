```applescript
-- maybe :: b -> (a -> b) -> Maybe a -> b
on maybe(v, f, mb)
    -- Either the default value v (if mb is Nothing),
    -- or the application of the function f to the 
    -- contents of the Just value in mb.
    if Nothing of mb then
        v
    else
        tell mReturn(f) to |λ|(Just of mb)
    end if
end maybe
```


```javascript
// maybe :: b -> (a -> b) -> Maybe a -> b
const maybe = v =>
    // Default value (v) if m is Nothing, or f(m.Just)
    f => m => "Just" in m
        ? f(m.Just)
        : v;
```
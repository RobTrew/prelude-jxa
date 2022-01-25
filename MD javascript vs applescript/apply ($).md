```applescript
-- apply ($) :: (a -> b) -> a -> b
on apply(f, x)
    mReturn(f)'s |λ|(x)
end apply
```


```javascript
// apply ($) :: (a -> b) -> a -> b
const apply = f =>
    // Application operator.
    x => f(x);
```
```applescript
-- apply ($) :: (a -> b) -> a -> b
on apply(f, x)
    mReturn(f)'s |λ|(x)
end apply
```

```js
// apply ($) :: (a -> b) -> a -> b
const apply = (f, x) => f(x);
```
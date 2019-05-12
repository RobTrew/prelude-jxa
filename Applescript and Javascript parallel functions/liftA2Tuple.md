```applescript
-- liftA2Tuple :: Monoid m => (a -> b -> c) -> (m, a) -> (m, b) -> (m, c)
on liftA2Tuple(f, a, b)
    if class of b is list then
        set b1 to {}
        set b2 to {}
    else
        set b1 to |1| of b
        set b2 to |2| of b
    end if
    Tuple(mappend(|1| of a, b1), mReturn(f)'s |λ|(|2| of a, b2))
end liftA2Tuple
```

```js
// liftA2Tuple :: Monoid m => (a -> b -> c) -> (m, a) -> (m, b) -> (m, c)
const liftA2Tuple = f => a => b =>
    Tuple(mappend(a[0], b[0]), f(a[1])(b[1]));
```
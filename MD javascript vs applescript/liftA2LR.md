```javascript
// liftA2LR :: (a -> b -> c) -> Either d a -> Either d b -> Either d c
const liftA2LR = f =>
    // The binary function f lifted to a
    // function over two Either values.
    a => b => bindLR(a)(
        x => bindLR(b)(
            compose(Right, f(x))
        )
    );
```


```applescript
-- liftA2LR :: (a -> b -> c) -> Either d a -> Either d b -> Either d c
on liftA2LR(f, a, b)
    set x to |Right| of a
    if class of b is list then
        set y to {}
    else
        set y to |Right| of b
    end if
    
    if x is missing value then
        a
    else if y is missing value then
        b
    else
        |Right|(|λ|(x, y) of mReturn(f))
    end if
end liftA2LR
```
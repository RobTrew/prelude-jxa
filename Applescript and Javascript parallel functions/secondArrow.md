```applescript
-- Lift a simple function to one which applies to a tuple, 
-- transforming only the second item of the tuple
```

```applescript
-- secondArrow :: (a -> b) -> ((c, a) -> (c, b))
on secondArrow(f)
    script
        on |λ|(xy)
            Tuple(|1| of xy, mReturn(f)'s |λ|(|2| of xy))
        end |λ|
    end script
end |second|
```

```js
// Lift a simple function to one which applies to a tuple, 
// transforming only the second item of the tuple
```

```js
// secondArrow :: (a -> b) -> ((c, a) -> (c, b))
const secondArrow = f => xy => Tuple(xy[0], f(xy[1]));
```
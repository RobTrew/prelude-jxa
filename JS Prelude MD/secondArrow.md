```js
// Lift a simple function to one which applies to a tuple, 
// transforming only the second item of the tuple
```

```js
// secondArrow :: (a -> b) -> ((c, a) -> (c, b))
const secondArrow = f => xy => 
    Tuple(xy[0])(
        f(xy[1])
    );
```
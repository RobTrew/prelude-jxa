```js
// Lift a simple function to one which applies to a tuple, 
// transforming only the first item of the tuple
```

```js
// firstArrow :: (a -> b) -> ((a, c) -> (b, c))
const firstArrow = f => xy => Tuple(f(xy[0]))(
    xy[1]
);
```
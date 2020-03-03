```js
// firstArrow :: (a -> b) -> ((a, c) -> (b, c))
const firstArrow = f => 
    // A simple function lifted to one which applies
    // to a tuple, transforming only its first item.
    xy => Tuple(f(xy[0]))(
       xy[1]
    );
```
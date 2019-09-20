```js
// apply ($) :: (a -> b) -> a -> b
const apply = f =>
    // Application operator.
    x => f(x);
```
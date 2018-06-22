```js
// | The conjunction of a container of Bools. 
// True unless any contained value is false.
```

```js
// and :: [Bool] -> Bool
const and = xs =>
    xs.every(Boolean);
```
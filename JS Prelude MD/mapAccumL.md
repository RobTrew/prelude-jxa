```js
// Map-accumulation is a combination of map and a catamorphism;
// it applies a function to each element of a list, passing an accumulating 
// parameter from left to right, and returning a final value of this 
// accumulator together with the new list.
```

```js
// mapAccumL :: (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
const mapAccumL = f => acc => xs =>
    xs.reduce((a, x, i) => {
        const pair = f(a[0])(x)(i);
        return Tuple(pair[0])(a[1].concat(pair[1]));
    }, Tuple(acc)([]));
```
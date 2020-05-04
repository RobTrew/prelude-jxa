```js
// mapAccumL :: (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
const mapAccumL = f =>
    // Map-accumulation is a combination of map and a catamorphism;
    // it applies a function to each element of a list, passing an
    // accumulating parameter from left to right, and returning a
    // final value of this accumulator together with the new list.
    acc => xs => xs.reduce((a, x) => {
        const pair = f(a[0])(x);
        return Tuple(pair[0])(a[1].concat(pair[1]));
    }, Tuple(acc)([]));
```
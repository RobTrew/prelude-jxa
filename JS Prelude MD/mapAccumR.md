```js
// 'The mapAccumR function behaves like a combination of map and foldr; 
// it applies a function to each element of a list, passing an accumulating 
// parameter from right to left, and returning a final value of this 
// accumulator together with the new list.' (See Hoogle)
```

```js
// mapAccumR :: (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
const mapAccumR = f => acc => xs =>
    xs.reduceRight((a, x) => {
        const pair = f(a[0])(x);
        return Tuple(pair[0])([pair[1]].concat(a[1]));
    }, Tuple(acc)([]));
```
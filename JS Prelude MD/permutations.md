```js
// permutations :: [a] -> [[a]]
const permutations = xs =>
    xs.reduceRight(
        (a, x) => concatMap(
            xs => enumFromTo(0, xs.length)
            .map(n => xs.slice(0, n)
                .concat(x)
                .concat(xs.slice(n))
            ),
            a
        ),
        [[]]
    );

// OR
// // permutations :: [a] -> [[a]]
// const permutations = xs => {
//     const go = xs =>
//         xs.length ? concatMap(x => concatMap(ys => [
//                 [x].concat(ys)
//             ],
//             go(delete_(x, xs))), xs) : [
//             []
//         ];
//     return go(xs);
// };
```
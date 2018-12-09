```applescript
-- permutations :: [a] -> [[a]]
on permutations(xs)
    script go
        on |λ|(x, a)
            script
                on |λ|(ys)
                    script infix
                        on |λ|(n)
                            if ys ≠ {} then
                                take(n, ys) & x & drop(n, ys)
                            else
                                {x}
                            end if
                        end |λ|
                    end script
                    map(infix, enumFromTo(0, (length of ys)))
                end |λ|
            end script
            concatMap(result, a)
        end |λ|
    end script
    foldr(go, {{}}, xs)
end permutations
```

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
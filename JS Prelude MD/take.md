```javascript
// take :: Int -> [a] -> [a]
// take :: Int -> String -> String
const take = n =>
    // The first n elements of a list,
    // string of characters, or stream.
    xs => "GeneratorFunction" !== xs
    .constructor.constructor.name
        ? xs.slice(0, n)
        : Array.from({length: n},
            () => {
                const x = xs.next();

                return x.done
                    ? []
                    : [x.value];
            })
        .flat();
```
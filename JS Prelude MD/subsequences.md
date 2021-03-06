```javascript
// subsequences :: [a] -> [[a]]
// subsequences :: String -> [String]
const subsequences = qs => {
    // subsequences([1,2,3]) -> [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
    // subsequences('abc') -> ["","a","b","ab","c","ac","bc","abc"]
    const
        // nonEmptySubsequences :: [a] -> [[a]]
        nonEmptySubsequences = xxs => {
            if (xxs.length < 1) {
                return [];
            }
            const [x, xs] = [xxs[0], xxs.slice(1)];
            const f = (r, ys) => cons(ys)(cons(cons(x)(ys))(r));

            return cons([x])(nonEmptySubsequences(xs)
                .reduceRight(f, []));
        };

    return ("string" === typeof qs) ? (
        cons("")(nonEmptySubsequences(qs.split(""))
            .map(q => "".concat(...q)))
    ) : cons([])(nonEmptySubsequences(qs));
};
```
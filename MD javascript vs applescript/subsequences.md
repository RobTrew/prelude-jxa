```applescript
-- subsequences :: [a] -> [[a]]
-- subsequences :: String -> [String]
on subsequences(xs)
    -- subsequences([1,2,3]) -> [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
    -- subsequences("abc") -> ["","a","b","ab","c","ac","bc","abc"]
    script nonEmptySubsequences
        on |λ|(xxs)
            if length of xxs < 1 then
                {}
            else
                set {x, xs} to {item 1 of xxs, tail(xxs)}
        
                script f
                    on |λ|(ys, r)
                        cons(ys, cons(cons(x, ys), r))
                    end |λ|
                end script
                
                cons({x}, foldr(f, {}, |λ|(xs) of nonEmptySubsequences))
            end if
        end |λ|
    end script
    if class of xs is text then
        cons("", map(my concat, |λ|(characters of xs) of nonEmptySubsequences))
    else
        cons([], |λ|(xs) of nonEmptySubsequences)
    end if
end subsequences
```


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
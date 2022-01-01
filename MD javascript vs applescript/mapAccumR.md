```javascript
// mapAccumR :: (acc -> x -> (acc, y)) -> acc ->
//    [x] -> (acc, [y])
const mapAccumR = f =>
    // A tuple of an accumulation and a list
    // obtained by a combined map and fold,
    // with accumulation from right to left.
    acc => xs => [...xs].reduceRight(
        ([a, b], x) => second(
            v => [v].concat(b)
        )(
            f(a)(x)
        ),
        Tuple(acc)([])
    );
```


```applescript
-- mapAccumR :: (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
on mapAccumR(f, acc, xs)
    -- 'The mapAccumR function behaves like a combination of map and foldr; 
    --  it applies a function to each element of a list, passing an accumulating 
    --  parameter from |Right| to |Left|, and returning a final value of this 
    --  accumulator together with the new list.' (see Hoogle)
    script
        on |λ|(x, a, i)
            tell mReturn(f) to set pair to |λ|(|1| of a, x, i)
            Tuple(|1| of pair, (|2| of pair) & |2| of a)
        end |λ|
    end script
    foldr(result, Tuple(acc, []), xs)
end mapAccumR
```
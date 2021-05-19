```applescript
-- mapAccumL :: (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
on mapAccumL(f, acc, xs)
    -- 'The mapAccumL function behaves like a combination of map and foldl; 
    -- it applies a function to each element of a list, passing an 
    -- accumulating parameter from |Left| to |Right|, and returning a final 
    -- value of this accumulator together with the new list.' (see Hoogle)
    script
        on |λ|(a, x, i)
            tell mReturn(f) to set pair to |λ|(|1| of a, x, i)
            Tuple(|1| of pair, (|2| of a) & {|2| of pair})
        end |λ|
    end script
    
    foldl(result, Tuple(acc, []), xs)
end mapAccumL
```


```javascript
// mapAccumL :: (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
const mapAccumL = f =>
    // A tuple of an accumulation and a list
    // obtained by a combined map and fold,
    // with accumulation from left to right.
    acc => xs => [...xs].reduce(
        (a, x) => second(
            append(snd(a))
        )(
            f(fst(a))(x)
        ), Tuple(acc)([])
    );
```
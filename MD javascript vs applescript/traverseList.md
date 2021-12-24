```applescript
--    1. Map each element of a structure to an action,
--    2. evaluate these actions from left to right, and
--    3. collect the results.
-- 
--    traverse f = List.foldr cons_f (pure [])
--      where cons_f x ys = liftA2 (:) (f x) ys
-- traverseList :: (Applicative f) => (a -> f b) -> [a] -> f [b]
on traverseList(f, xs)
    set lng to length of xs
    if 0 < lng then
        set mf to mReturn(f)
        
        set vLast to mf's |λ|(item -1 of xs)
        if class of vLast is record and ¬
            keys(vLast) contains "type" then
            set t to type of vLast
        else
            set t to "List"
        end if
        
        script cons_f
            on |λ|(x, ys)
                liftA2(my cons, mf's |λ|(x), ys)
            end |λ|
        end script
        
        foldr(cons_f, ¬
            liftA2(my cons, vLast, pureT(t, [])), ¬
            init(xs))
    else
        {{}}
    end if
end traverseList
```


```javascript
// traverseList :: (Applicative f) => (a -> f b) ->
// [a] -> f [b]
const traverseList = f =>
    // Collected results of mapping each element
    // of a structure to an action, and evaluating
    // these actions from left to right.
    xs => 0 < xs.length ? (() => {
        const
            vLast = f(xs.slice(-1)[0]),
            t = typeName(vLast);

        return xs.slice(0, -1).reduceRight(
            (ys, x) => liftA2(cons)(f(x))(ys),
            liftA2(cons)(vLast)(pureT(t)([]))
        );
    })() : fType(f)([]);
```
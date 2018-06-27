```applescript
--    1. Map each element of a structure to an action,
--    2. evaluate these actions from left to right, and
--    3. collect the results.
-- 
--    traverse f = List.foldr cons_f (pure [])
--      where cons_f x ys = liftA2 (:) (f x) ys
```

```applescript
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
            items 1 thru -2 of xs)
    else
        {}
    end if
end traverseList
```

```js
// - Map each element of a structure to an action,
// - evaluate these actions from left to right,
// - and collect the results.

//    traverse f = List.foldr cons_f (pure [])
//      where cons_f x ys = liftA2 (:) (f x) ys
```

```js
// traverseList :: (Applicative f) => (a -> f b) -> [a] -> f [b]
const traverseList = (f, xs) => {
    const lng = xs.length;
    return 0 < lng ? (() => {
        const
            vLast = f(xs[lng - 1]),
            t = vLast.type || 'List';
        return xs.slice(0, -1).reduceRight(
            (ys, x) => liftA2(cons, f(x), ys),
            liftA2(cons, vLast, pureT(t, []))
        );
    })() : [];
};
```
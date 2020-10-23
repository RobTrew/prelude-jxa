```applescript
-- findTree :: (a -> Bool) -> Tree a -> Maybe Tree a
on findTree(p, tree)
    -- The first of any nodes in the tree which match the predicate p
    -- (For all matches, see treeMatches)
    script go
        property pf : mReturn(p)'s |λ|
        on |λ|(oNode)
            if pf(root of oNode) then
                Just(oNode)
            else
                set xs to nest of oNode
                set lng to length of xs
                
                script inNest
                    on |λ|(tpl)
                        lng < fst(tpl) or (not (Nothing of snd(tpl)))
                    end |λ|
                end script
                
                script nextPeer
                    on |λ|(tpl)
                        Tuple(1 + fst(tpl), go's |λ|(item (fst(tpl)) of xs))
                    end |λ|
                end script
                
                if 0 < lng then
                    snd(|until|(inNest, nextPeer, Tuple(1, Nothing())))
                else
                    Nothing()
                end if
            end if
        end |λ|
    end script
    
    go's |λ|(tree)
end findTree
```


```javascript
// findTree :: (a -> Bool) -> Tree a -> Maybe Tree a
const findTree = p => {
    // The first of any nodes in the tree which match the predicate p
    // (For all matches, see treeMatches)
    const go = tree =>
        p(tree.root) ? (
            Just(tree)
        ) : (() => {
            const
                xs = tree.nest,
                lng = xs.length;
            return 0 < lng ? until(
                tpl => lng <= tpl[0] || !tpl[1].Nothing
            )(
                tpl => Tuple(1 + tpl[0])(
                    go(xs[tpl[0]])
                )
            )(
                Tuple(0)(
                    Nothing()
                )
            )[1] : Nothing();
        })();
    return go;
};
```
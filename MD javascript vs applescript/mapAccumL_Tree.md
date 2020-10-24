```applescript
-- mapAccumL_Tree :: (acc -> x -> (acc, y)) -> acc -> Tree -> (acc, Tree)
on mapAccumL_Tree(f, acc, tree)
    script go
        property mf : mReturn(f)'s |λ|
        on |λ|(a, x)
            set pair to f(a, root of x)
            set tpl to mapAccumL(go, item 1 of pair, nest of x)
            Tuple(item 1 of tpl, Node(item 2 of pair, item 2 of tpl))
        end |λ|
    end script
    |λ|(acc, tree) of go
end mapAccumL_Tree
```


```javascript
// mapAccumL_Tree :: (acc -> x -> (acc, y)) ->
// acc -> Tree -> (acc, Tree)
const mapAccumL_Tree = f => {
    const go = a => x => {
        const
            pair = f(a)(root(x)),
            tpl = mapAccumL(go)(pair[0])(nest(x));
        return Tuple(tpl[0])(
            Node(pair[1])(tpl[1])
        );
    };
    return go;
};
```
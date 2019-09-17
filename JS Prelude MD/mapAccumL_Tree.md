```js
// mapAccumL_Tree :: (acc -> x -> (acc, y)) 
// -> acc -> Tree -> (acc, Tree)
const mapAccumL_Tree = f => acc => tree => {
    const go = (a, x) => {
        const
            pair = f(a)(x.root),
            tpl = mapAccumL(go)(pair[0])(x.nest);
        return Tuple(tpl[0])(
            Node(pair[1])(
              tpl[1]
            )
        );
    };
    return go(acc, tree);
};
```
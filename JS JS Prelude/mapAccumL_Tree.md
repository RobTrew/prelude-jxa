```js
// mapAccumL_Tree :: (acc -> x -> (acc, y))
// -> acc -> Tree -> (acc, Tree)
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
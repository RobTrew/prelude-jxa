```applescript
-- traverse f (Node x ts) = liftA2 Node (f x) (traverse (traverse f) ts)
on traverseTree(f, tree)
    script go
        on |λ|(x)
            liftA2(my Node, ¬
                mReturn(f)'s |λ|(root of x), ¬
                traverseList(go, nest of x))
        end |λ|
    end script
    go's |λ|(tree)
end traverseTree
```

```js
// traverse f (Node x ts) = liftA2 Node (f x) (traverse (traverse f) ts)
const traverseTree = (f, node) => {
    const go = x =>
        liftA2(
            Node, f(x.root),
            traverseList(go, x.nest)
        );
    return go(node);
};
```
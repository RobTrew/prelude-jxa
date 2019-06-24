```applescript
-- traverseTree :: Applicative f => (a -> f b) -> Tree a -> f (Tree b)
on traverseTree(f, tree)
    -- traverse f (Node x ts) = liftA2 Node (f x) (traverse (traverse f) ts)
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
// traverseTree :: Applicative f => (a -> f b) -> Tree a -> f (Tree b)
const traverseTree = (f, node) => {
    // traverse f (Node x ts) = liftA2 Node (f x) (traverse (traverse f) ts)
    const go = x =>
        liftA2(
            Node, f(x.root),
            traverseList(go, x.nest)
        );
    return go(node);
};
```
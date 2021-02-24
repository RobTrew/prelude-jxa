```javascript
// traverseTree :: Applicative f => (a -> f b) ->
// Tree a -> f (Tree b)
const traverseTree = f => {
    // traverse f (Node x ts) =
    // liftA2 Node (f x) (traverse (traverse f) ts)
    const go = tree =>
        liftA2(Node)(f(tree.root))(
            traverseList(go)(
                tree.nest
            )
        );

    return go;
};
```
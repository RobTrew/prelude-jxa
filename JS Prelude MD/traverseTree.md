```js
// traverseTree :: Applicative f => (a -> f b) -> Tree a -> f (Tree b)
const traverseTree = f => node => {
    // traverse f (Node x ts) = liftA2 Node (f x) (traverse (traverse f) ts)
    const go = x =>
        liftA2(Node)(f(x.root))(
            traverseList(go)(
                x.nest
            )
        );
    return go(node);
};
```
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
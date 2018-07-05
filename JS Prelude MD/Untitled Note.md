```js
// traverse f (Node x ts) = liftA2 Node (f x) (traverse (traverse f) ts)
const traverseTree = (f, node) => {
    const
        x = node.root,
        ts = node.nest,
        fx = f(x);
    return liftA2(Node, fx, traverse((c => traverse(f, c)), ts))
};
```
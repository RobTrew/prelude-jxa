```js
// unfoldTree :: (b -> (a, [b])) -> b -> Tree a
const unfoldTree = f =>
    // A tree unfolded in breadth-first order
    // from a seed value.
    // Given a seed value, f defines a tuple:
    // (Node root value, [seed])
    // Empty seed lists conclude recursion.
    b => uncurry(Node)(
        second(unfoldForest(f))(
            f(b)
        )
    );
```
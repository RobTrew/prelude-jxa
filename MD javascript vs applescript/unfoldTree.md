```javascript
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


```applescript
-- | Build a tree from a seed value
-- unfoldTree :: (b -> (a, [b])) -> b -> Tree a
on unfoldTree(f, b)
    set g to mReturn(f)
    set tpl to g's |λ|(b)
    Node(|1| of tpl, unfoldForest(g, |2| of tpl))
end unfoldTree
```
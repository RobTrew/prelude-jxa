```applescript
-- drawTree :: Tree String -> String
on drawTree(tree)
    unlines(draw(tree))
end drawTree
```


```javascript
// drawTree :: Tree String -> String
const drawTree = tree =>
    unlines(draw(tree));
```
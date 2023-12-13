```javascript
// filePathTree :: filePath -> [Tree String] -> Tree FilePath
const filePathTree = fpAnchor =>
    trees => {
        const go = fp => tree => {
            const path = `${fp}/${tree.root.text}`;

            return Node(path)(
                tree.nest.map(go(path))
            );
        };

        return Node(fpAnchor)(
            trees.map(go(fpAnchor))
        );
    };
```


```applescript
-- filePathTree :: filePath -> [Tree String] -> Tree FilePath
on filePathTree(fpAnchor, trees)
    script go
        on |λ|(fp)
            script
                on |λ|(tree)
                    set strPath to fp & "/" & (root of tree)
                    
                    Node(strPath, map(go's |λ|(strPath), nest of tree))
                end |λ|
            end script
        end |λ|
    end script
    
    Node(fpAnchor, map(go's |λ|(fpAnchor), trees))
end filePathTree
```
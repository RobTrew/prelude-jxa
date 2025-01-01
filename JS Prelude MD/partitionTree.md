```javascript
// partitionTree :: (a -> Bool) -> Tree a -> ([Tree a], [Tree a])
const partitionTree = p =>
    // A list of matching subtrees, tupled with a list which
    // contains the remains, if any, of the input tree.
    foldTree(x => vs => {
        const
            [matches, residues] = unzip(vs).map(
                v => v.flat()
            );

        return p(x)
            // x is both the new head of matches, and
            // the parent of the accumulated residues.
            ? Tuple([
                Node(x)(residues), ...matches
            ])([])

            // Match list is unchanged, and x is
            // the parent of the residue accumulation.
            : Tuple(matches)([
                Node(x)(residues)
            ]);
    });
```
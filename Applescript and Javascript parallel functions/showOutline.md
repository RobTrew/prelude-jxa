```applescript
-- showOutline :: Tree String -> String
on showOutline(x)
    script go
        on |λ|(indent)
            script
                on |λ|(tree)
                    {indent & (root of tree)} & ¬
                        concatMap(go's |λ|(tab & indent), ¬
                            nest of tree)
                end |λ|
            end script
        end |λ|
    end script
    unlines((go's |λ|(""))'s |λ|(x))
end showOutline
```

```js
// showOutline :: Tree String -> String
const showOutline = tree => {
    const go = indent => tree =>
        unlines(
            [indent + tree.root]
            .concat(concatMap(go('    ' + indent), tree.nest))
        );
    return go('')(tree);
};
```
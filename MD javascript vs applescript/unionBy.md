```javascript
// unionBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
const unionBy = fnEq => xs => ys => {
    const sx = nubBy(fnEq)(xs);

    return sx.concat(
        sx.reduce(
            (a, x) => deleteBy(fnEq)(
                x
            )(a),
            nubBy(fnEq)(ys)
        )
    );
};
```


```applescript
-- unionBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
on unionBy(fnEq, xs, ys)
    script flipDeleteByEq
        on |λ|(xs, x)
            deleteBy(fnEq, x, xs)
        end |λ|
    end script
    xs & foldl(flipDeleteByEq, nubBy(fnEq, ys), xs)
end unionBy
```
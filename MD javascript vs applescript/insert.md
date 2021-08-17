```javascript
// insert :: Ord a => a -> [a] -> [a]
const insert = x =>
    ys => {
        const [pre, post] = Array.from(
            break_(y => y >= x)(ys)
        );

        return [...pre, x, ...post];
    };
```


```applescript
-- insert :: Ord a => a -> [a] -> [a]
on insert(x, ys)
    insertBy(my compare, x, ys)
end insert
```
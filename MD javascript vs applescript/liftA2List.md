```applescript
-- liftA2List :: (a -> b -> c) -> [a] -> [b] -> [c]
on liftA2List(f, xs, ys)
    script
        property g : mReturn(f)'s |λ|
        on |λ|(x)
            script
                on |λ|(y)
                    {g(x, y)}
                end |λ|
            end script
            concatMap(result, ys)
        end |λ|
    end script
    concatMap(result, xs)
end liftA2List
```


```javascript
// liftA2List :: (a -> b -> c) -> [a] -> [b] -> [c]
const liftA2List = op =>
    // The binary operator op applied to each pair of
    // arguments in the cartesian product of xs and ys.
    // A binary operator lifed to a function over two lists.
    xs => ys => xs.flatMap(
        x => ys.map(op(x))
    );
```
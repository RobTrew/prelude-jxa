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

```js
// liftA2List :: (a -> b -> c) -> [a] -> [b] -> [c]
const liftA2List = (f, xs, ys) =>
    concatMap(x => concatMap(y => [f(x, y)], ys), xs);
```
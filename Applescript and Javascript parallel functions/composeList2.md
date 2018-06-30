```applescript
-- composeList2 :: [(a -> a)] -> (a -> a)
on composeList2(fs)
    script
        on |λ|(x)
            script
                on |λ|(a, f)
                    mReturn(f)'s |λ|(a)
                end |λ|
            end script
            
            foldl(result, x, fs)
        end |λ|
    end script
end composeListLR
```

```js
// composeList2 :: [(a -> a)] -> (a -> a)
const composeList2 = fs =>
    x => fs.reduce((a, f) => f(a), x);
```
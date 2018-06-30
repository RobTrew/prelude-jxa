```applescript
-- composeList :: [(a -> a)] -> (a -> a)
on composeList(fs)
    script
        on |λ|(x)
            script
                on |λ|(f, a)
                    mReturn(f)'s |λ|(a)
                end |λ|
            end script
            
            foldr(result, x, fs)
        end |λ|
    end script
end composeListRL
```

```js
// composeList :: [(a -> a)] -> (a -> a)
const composeList = fs =>
    x => fs.reduceRight((a, f) => f(a), x, fs);
```
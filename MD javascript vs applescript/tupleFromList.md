```javascript
// tupleFromList :: [a] -> (a, a ...)
const tupleFromList = xs =>
    TupleN(...xs);
```


```applescript
-- tupleFromList :: [a] -> (a, a ...)
on tupleFromList(xs)
    set lng to length of xs
    if 1 < lng then
        if 2 < lng then
            set strSuffix to lng as string
        else
            set strSuffix to ""
        end if
        script kv
            on |λ|(a, x, i)
                insertDict((i as string), x, a)
            end |λ|
        end script
        foldl(kv, {type:"Tuple" & strSuffix}, xs) & {length:lng}
    else
        missing value
    end if
end tupleFromList
```
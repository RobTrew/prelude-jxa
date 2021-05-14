```applescript
-- assocs :: Map k a -> [(k, a)]
on assocs(m)
    script go
        on |λ|(k)
            set mb to lookupDict(k, m)
            if true = |Nothing| of mb then
                {}
            else
                {{k, |Just| of mb}}
            end if
        end |λ|
    end script
    concatMap(go, keys(m))
end assocs
```


```javascript
// assocs :: Map k a -> [(k, a)]
const assocs = m =>
    Object.entries(m).map(
        kv => Tuple(...kv)
    );
```
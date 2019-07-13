```applescript
-- mapFromList :: [(k, v)] -> Dict
on mapFromList(kvs)
    set tpl to unzip(kvs)
    script
        on |λ|(x)
            x as string
        end |λ|
    end script
    (current application's NSDictionary's ¬
        dictionaryWithObjects:(|2| of tpl) ¬
            forKeys:map(result, |1| of tpl)) as record
end mapFromList
```

```js
// mapFromList :: [(k, v)] -> Dict
const mapFromList = kvs =>
    Object.fromEntries(kvs);
```
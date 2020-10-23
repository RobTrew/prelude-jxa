```applescript
-- dictFromList :: [(k, v)] -> Dict
on dictFromList(kvs)
    set tpl to unzip(kvs)
    script go
        on |λ|(x)
            x as string
        end |λ|
    end script
    tell current application
        (its (NSDictionary's dictionaryWithObjects:(my snd(tpl)) ¬
            forKeys:(my map(go, my fst(tpl))))) as record
    end tell
end dictFromList
```


```javascript
// dictFromList :: [(k, v)] -> Dict
const dictFromList = kvs =>
    Object.fromEntries(kvs);
```
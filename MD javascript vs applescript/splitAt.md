```javascript
// splitAt :: Int -> [a] -> ([a], [a])
const splitAt = n =>
    xs => Tuple(xs.slice(0, n))(
        xs.slice(n)
    );
```


```applescript
-- splitAt :: Int -> [a] -> ([a], [a])
on splitAt(n, xs)
    if n > 0 and n < length of xs then
        if class of xs is text then
            {items 1 thru n of xs as text, ¬
                items (n + 1) thru -1 of xs as text}
        else
            {items 1 thru n of xs, items (n + 1) thru -1 of xs}
        end if
    else
        if n < 1 then
            {{}, xs}
        else
            {xs, {}}
        end if
    end if
end splitAt
```
```javascript
// tail :: [a] -> [a]
const tail = xs =>
    // A new list consisting of all
    // items of xs except the first.
    "GeneratorFunction" !== xs.constructor
    .constructor.name ? (
        (ys => 0 < ys.length ? ys.slice(1) : [])(
            list(xs)
        )
    ) : (take(1)(xs), xs);
```


```applescript
-- tail :: [a] -> [a]
on tail(xs)
    set blnText to text is class of xs
    if blnText then
        set unit to ""
    else
        set unit to {}
    end if
    set lng to length of xs
    if 1 > lng then
        missing value
    else if 2 > lng then
        unit
    else
        if blnText then
            text 2 thru -1 of xs
        else
            rest of xs
        end if
    end if
end tail
```
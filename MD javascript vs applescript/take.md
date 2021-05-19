```javascript
// take :: Int -> [a] -> [a]
// take :: Int -> String -> String
const take = n =>
    // The first n elements of a list,
    // string of characters, or stream.
    xs => "GeneratorFunction" !== xs
    .constructor.constructor.name ? (
        xs.slice(0, n)
    ) : [].concat(...Array.from({
        length: n
    }, () => {
        const x = xs.next();

        return x.done ? [] : [x.value];
    }));
```


```applescript
-- take :: Int -> [a] -> [a]
-- take :: Int -> String -> String
on take(n, xs)
    set c to class of xs
    if list is c then
        set lng to length of xs
        if 0 < n and 0 < lng then
            items 1 thru min(n, lng) of xs
        else
            {}
        end if
    else if string is c then
        if 0 < n then
            text 1 thru min(n, length of xs) of xs
        else
            ""
        end if
    else if script is c then
        set ys to {}
        repeat with i from 1 to n
            set v to |λ|() of xs
            if missing value is v then
                return ys
            else
                set end of ys to v
            end if
        end repeat
        return ys
    else
        missing value
    end if
end take
```
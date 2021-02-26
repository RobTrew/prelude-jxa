```applescript
-- isPrefixOf :: [a] -> [a] -> Bool
-- isPrefixOf :: String -> String -> Bool
on isPrefixOf(xs, ys)
    -- isPrefixOf takes two lists or strings and returns 
    --  true if and only if the first is a prefix of the second.
    script go
        on |λ|(xs, ys)
            set intX to length of xs
            if intX < 1 then
                true
            else if intX > length of ys then
                false
            else if class of xs is string then
                (offset of xs in ys) = 1
            else
                set {xxt, yyt} to {Just of uncons(xs), Just of uncons(ys)}
                ((|1| of xxt) = (|1| of yyt)) and |λ|(|2| of xxt, |2| of yyt)
            end if
        end |λ|
    end script
    go's |λ|(xs, ys)
end isPrefixOf
```


```javascript
// isPrefixOf :: [a] -> [a] -> Bool
// isPrefixOf :: String -> String -> Bool
const isPrefixOf = xs =>
    // True if and only if xs is a prefix of ys.
    ys => {
        const go = (vs, ws) => {
            const intX = vs.length;

            return 0 < intX ? (
                ws.length >= intX ? vs[0] === ws[0] && go(
                    vs.slice(1), ws.slice(1)
                ) : false
            ) : true;
        };

        return "string" !== typeof xs ? (
            go(xs, ys)
        ) : ys.startsWith(xs);
    };
```
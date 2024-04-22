```javascript
// isPrefixOf :: [a] -> [a] -> Bool
// isPrefixOf :: String -> String -> Bool
const isPrefixOf = xs =>
// True if and only if xs is a prefix of ys.
    ys => {
        const go = (vs, ws) => {
            const intX = vs.length;

            return 0 < intX
                ? ws.length >= intX
                    ? vs[0] === ws[0] && go(
                        vs.slice(1), ws.slice(1)
                    )
                    : false
                : true;
        };

        return "string" !== typeof xs
            ? go(xs, ys)
            : ys.startsWith(xs);
    };
```
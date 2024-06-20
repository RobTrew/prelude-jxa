```javascript
// outdented :: String -> String
const outdented = s => {
    // All lines in the string outdented by the same amount
    // (just enough to ensure that the least indented lines
    //  have no remaining indent)
    // All relative indents are left unchanged
    const
        // Leading indentation characters.
        rgx = /^\s*/u,
        xs = lines(s),
        n = Math.min(
            ...xs.map(txt => rgx.exec(txt)[0].length)
        );

    return 0 < n ? (
        xs.map(x => x.slice(n)).join("\n")
    ) : s.slice(0);
};
```


```applescript
-- All lines in the string outdented by the same amount
-- (just enough to ensure that the least indented lines 
--  have no remaining indent)
-- All relative indents are left unchanged
-- outdented :: String -> String
on outdented(s)
    set xs to |lines|(s)
    script dent
        on |λ|(x)
            script isSpace
                on |λ|(c)
                    id of c = 32
                end |λ|
            end script
            length of takeWhile(isSpace, x)
        end |λ|
    end script
    set n to |λ|(minimumBy(comparing(dent), xs)) of dent
    if n < 1 then
        s
    else
        unlines(map(|λ|(n) of curry(drop), xs))
    end if
end outdented
```
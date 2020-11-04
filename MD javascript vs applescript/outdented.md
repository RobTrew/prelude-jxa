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


```javascript
// outdented :: String -> String
const outdented = s => {
    // All lines in the string outdented by the same amount
    // (just enough to ensure that the least indented lines 
    //  have no remaining indent)
    // All relative indents are left unchanged
    const
        rgx = /^ */, // Leading space characters.
        xs = lines(s),
        n = length(minimumBy(comparing(length))(
            xs.map(txt => rgx.exec(txt)[0])
        ));
    return unlines(map(drop(n))(xs));
};
```
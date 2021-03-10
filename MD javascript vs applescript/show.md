```applescript
-- show :: a -> String
on show(e)
    set c to class of e
    if c = list then
        showList(e)
    else if c = record then
        set mb to lookupDict("type", e)
        if Nothing of mb then
            showDict(e)
        else
            script
                on |λ|(t)
                    if "Either" = t then
                        set f to my showLR
                    else if "Maybe" = t then
                        set f to my showMaybe
                    else if "Ordering" = t then
                        set f to my showOrdering
                    else if "Ratio" = t then
                        set f to my showRatio
                    else if class of t is text and t begins with "Tuple" then
                        set f to my showTuple
                    else
                        set f to my showDict
                    end if
                    tell mReturn(f) to |λ|(e)
                end |λ|
            end script
            tell result to |λ|(Just of mb)
        end if
    else if c = date then
        "\"" & showDate(e) & "\""
    else if c = text then
        "'" & e & "'"
    else if (c = integer or c = real) then
        e as text
    else if c = class then
        "null"
    else
        try
            e as text
        on error
            ("«" & c as text) & "»"
        end try
    end if
end show
```


```javascript
// show :: a -> String
// show :: a -> Int -> Indented String
const show = x => {
    const
        instances = {
            "(a -> b)": () => showFn,
            "Bool": () => str,
            "Bottom": () => showUndefined,
            "Date": () => a => a,
            "Dict": () => a => a,
            "Either": () => showLR,
            "List": () => showList,
            "Maybe": () => showMaybe,
            "Num": () => str,
            "Ratio": () => showRatio,
            "String": () => str,
            "Tuple": () => showTuple
        },
        str = y => y.toString(),
        t = typeName(x),
        instance = instances[t];

    return Boolean(instance) ? (
        "Node" !== t ? (
            JSON.stringify(
                x,
                (_, v) => instance()(v)
            )
        ) : showTree(x)
    ) : `No Show instance has been defined for ${t}.`;
};
```
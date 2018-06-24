```applescript
-- show :: a -> Stringon show(e)	set c to class of e	if c = list then		showList(e)	else if c = record then		set mb to lookupDict("type", e)		if Nothing of mb then			showDict(e)		else			script				on |λ|(t)					if "Either" = t then						set f to my showLR					else if "Maybe" = t then						set f to my showMaybe					else if "Ordering" = t then						set f to my showOrdering					else if "Ratio" = t then						set f to my showRatio					else if "Tuple" = t then						set f to my showTuple					else if "Tuple3" = t then						set f to my showTuple3					else if "Tuple4" = t then						set f to my showTuple4					else						set f to my showDict					end if					tell mReturn(f) to |λ|(e)				end |λ|			end script			tell result to |λ|(Just of mb)		end if	else if c = date then		"\"" & showDate(e) & "\""	else if c = text then		"'" & e & "'"	else if (c = integer or c = real) then		e as text	else if c = class then		"null"	else		try			e as text		on error			("«" & c as text) & "»"		end try	end ifend show
```

```js
// show :: a -> String
// show :: a -> Int -> Indented String
const show = (x, n) => {
    const
        e = ('function' !== typeof x) ? (
            x
        ) : {
            type: 'Function',
            f: x
        };
    return JSON.stringify(e, (_, v) => {
        const
            f = (v !== null && v !== undefined) ? (() => {
                const t = v.type;
                return 'Either' === t ? (
                    showLR
                ) : 'Function' === t ? (
                    dct => 'λ' + dct.f.toString()
                ) : 'Maybe' === t ? (
                    showMaybe
                ) : 'Ordering' === t ? (
                    showOrdering
                ) : 'Ratio' === t ? (
                    showRatio
                ) : 'Tuple' === t ? (
                    showTuple
                ) : 'Tuple3' === t ? (
                    showTuple3
                ) : 'Tuple4' === t ? (
                    showTuple4
                ) : undefined;
            })() : showUndefined;
        return Boolean(f) ? (
            f(v)
        ) : 'string' !== typeof v ? (
            v
        ) : "'" + v + "'";
    }, n)
};
```
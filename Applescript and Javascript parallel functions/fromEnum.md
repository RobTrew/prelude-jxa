```applescript
-- fromEnum :: Enum a => a -> Inton fromEnum(x)	set c to class of x	if c is boolean then		if x then			1		else			0		end if	else if c is text then		if x ≠ "" then			id of x		else			missing value		end if	else		x as integer	end ifend fromEnum
```

```js
// fromEnum :: Enum a => a -> Int
const fromEnum = x => {
    const type = typeof x;
    return type === 'boolean' ? (
        x ? 1 : 0
    ) : type === 'string' ? x.charCodeAt(0) : x;
};
```
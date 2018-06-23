```applescript
-- showOrdering :: Ordering -> Stringon showOrdering(e)	set v to value of e	if v > 0 then		"GT"	else if v < 0 then		"LT"	else		"EQ"	end ifend showOrdering
```

```js
// showOrdering :: Ordering -> String
const showOrdering = e =>
    e.value > 0 ? (
        'GT'
    ) : e.value < 0 ? (
        'LT'
    ) : 'EQ';
```
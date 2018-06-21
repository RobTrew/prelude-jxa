```applescript
-- delete :: Eq a => a -> [a] -> [a]on |delete|(x, xs)	set mbIndex to elemIndex(x, xs)	set lng to length of xs		if Nothing of mbIndex then		xs	else		if lng > 1 then			set i to Just of mbIndex			if i = 1 then				items 2 thru -1 of xs			else if i = lng then				items 1 thru -2 of xs			else				tell xs to items 1 thru (i - 1) & items (i + 1) thru -1			end if		else			{}		end if	end ifend |delete|
```

```js
// xs with first instance of x (if any) removed
```

```js
// delete :: Eq a => a -> [a] -> [a]
const delete_ = (x, xs) =>
    xs.length > 0 ? (
        (x === xs[0]) ? (
            xs.slice(1)
        ) : [xs[0]].concat(delete_(x, xs.slice(1)))
    ) : [];
```
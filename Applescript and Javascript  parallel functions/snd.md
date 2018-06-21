```applescript
-- snd :: (a, b) -> bon snd(tpl)	if class of tpl is record then		|2| of tpl	else		item 2 of tpl	end ifend snd
```

```js
// snd :: (a, b) -> b
const snd = tpl => tpl[1];
```
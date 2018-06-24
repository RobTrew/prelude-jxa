```applescript
-- fmap (<$>) :: Functor f => (a -> b) -> f a -> f bon fmap(f, fa)	if class of fa is record and keys(fa) contains "type" then		set t to type of fa		if t = "Either" then			set fm to my fmapLR		else if t = "Maybe" then			set fm to my fmapMay		else if t = "Tree" then			set fm to my fmapTree		else if t = "Tuple" then			set fm to my fmapTuple		else			set fm to my map		end if		|λ|(f, fa) of mReturn(fm)	else		map(f, fa)	end ifend fmap
```

```js
// fmap (<$>) :: Functor f => (a -> b) -> f a -> f b
const fmap = (f, fa) => {
    const t = fa.type;
    return (undefined !== t ? (
        'Either' === t ? (
            fmapLR
        ) : 'Maybe' === t ? (
            fmapMay
        ) : 'Node' === t ? (
            fmapTree
        ) : fmapTuple
    ) : map)(f, fa);
};
```
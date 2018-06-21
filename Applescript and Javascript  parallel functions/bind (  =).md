```applescript
-- bind (>>=) :: Monad m => m a -> (a -> m b) -> m bon bind(m, mf)	set c to class of m	if c = list then		bindList(m, mf)	else if c = record then		set ks to keys(m)		if ks contains "type" then			set t to type of m			if t = "Maybe" then				bindMay(m, mf)			else if t = "Either" then				bindEither(m, mf)			else if t = "Tuple" then				bindTuple(m, mf)			else				Nothing()			end if		else			Nothing()		end if	else		Nothing()	end ifend bind
```

```js
// bind (>>=) :: Monad m => m a -> (a -> m b) -> m b
const bind = (m, mf) =>
    (Array.isArray(m) ? (
        bindList
    ) : (() => {
        const t = m.type;
        return t === 'Either' ? (
            bindEither
        ) : t === 'Maybe' ? (
            bindMaybe
        ) : t === 'Tuple' ? (
            bindTuple
        ) : x => Left('No bind instance found for type: ' + t);
    })()(m, mf));
```
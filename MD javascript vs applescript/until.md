```applescript
-- until :: (a -> Bool) -> (a -> a) -> a -> aon |until|(p, f, x)	set v to x	set mp to mReturn(p)	set mf to mReturn(f)	repeat until mp's |λ|(v)		set v to mf's |λ|(v)	end repeat	vend |until|
```


```javascript
// until :: (a -> Bool) -> (a -> a) -> a -> a
const until = p =>
    // The value resulting from successive applications
    // of f to f(x), starting with a seed value x,
    // and terminating when the result returns true 
    // for the predicate p.
    f => {
        const go = x =>
            p(x) ? x : go(f(x));

        return go;
    };
```
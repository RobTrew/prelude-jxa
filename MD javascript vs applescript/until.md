```javascript
// until :: (a -> Bool) -> (a -> a) -> a -> a
const until = p =>
    // The value resulting from successive applications
    // of f to f(x), starting with a seed value x,
    // and terminating when the result returns true
    // for the predicate p.
    f => x => {
        let v = x;

        while (!p(v)) v = f(v);

        return v;
    };
```


```applescript
-- until :: (a -> Bool) -> (a -> a) -> a -> aon |until|(p, f, x)	set v to x	set mp to mReturn(p)	set mf to mReturn(f)	repeat until mp's |λ|(v)		set v to mf's |λ|(v)	end repeat	vend |until|
```
```applescript
-- compose :: (b -> c) -> (a -> b) -> a -> con compose(f, g)	script		on |λ|(x)			|λ|(|λ|(x) of mReturn(g)) of mReturn(f)		end |λ|	end scriptend compose
```

```js
// compose :: (b -> c) -> (a -> b) -> a -> c
const compose = (f, g) => x => f(g(x));
```
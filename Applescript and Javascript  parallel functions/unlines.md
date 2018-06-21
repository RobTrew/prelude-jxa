```applescript
-- unlines :: [String] -> Stringon unlines(xs)	set {dlm, my text item delimiters} to ¬		{my text item delimiters, linefeed}	set str to xs as text	set my text item delimiters to dlm	strend unlines
```

```js
// unlines :: [String] -> String
const unlines = xs => xs.join('\n');
```
```applescript
-- intercalateS :: String -> [String] -> Stringon intercalateS(delim)	script		on |λ|(xs)			set {dlm, my text item delimiters} to ¬				{my text item delimiters, delim}			set str to xs as text			set my text item delimiters to dlm			str		end |λ|	end scriptend intercalateS
```

```js
// intercalateS :: String -> [String] -> String
const intercalateS = (s, xs) =>
    xs.join(s);
```
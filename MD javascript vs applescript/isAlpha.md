```applescript
-- isAlpha :: Char -> Bool
on isAlpha(c)
    set ca to current application
    set oRgx to ca's NSRegularExpression's ¬
        regularExpressionWithPattern:("[A-Za-z\\u00C0-\\u00FF]") ¬
            options:(ca's NSRegularExpressionAnchorsMatchLines as integer) ¬
            |error|:(missing value)
    set oString to ca's NSString's stringWithString:c
    0 < (oRgx's numberOfMatchesInString:oString options:0 ¬
        range:{location:0, |length|:1})
end isAlpha
```


```javascript
// isAlpha :: Char -> Bool
const isAlpha = c =>
    (/[A-Za-z\u00C0-\u00FF]/u).test(c);
```
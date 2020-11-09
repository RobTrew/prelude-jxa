```applescript
-- Sentence case - initial string capitalized and rest lowercase
-- toSentence :: String -> String
on toSentence(str)
    set ca to current application
    if length of str > 0 then
        set locale to ca's NSLocale's currentLocale()
        set ws to ca's NSString
        (((ws's stringWithString:(text 1 of str))'s ¬
            uppercaseStringWithLocale:(locale)) as text) & ¬
            ((ws's stringWithString:(text 2 thru -1 of str))'s ¬
                lowercaseStringWithLocale:(locale)) as text
    else
        str
    end if
end toSentence
```


```javascript
// toSentence :: String -> String
const toSentence = s =>
    // Sentence case - initial char capitalized 
    // and rest lowercase.
    (0 < s.length) ? (
        s[0].toUpperCase() + s.slice(1)
        .toLowerCase()
    ) : s;
```
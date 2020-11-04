```applescript
-- replace :: String -> String -> String -> String
on replace(strNeedle, strNew, strHayStack)
    set {dlm, my text item delimiters} to {my text item delimiters, strNeedle}
    set xs to text items of strHayStack
    set my text item delimiters to strNew
    set strReplaced to xs as text
    set my text item delimiters to dlm
    return strReplaced
end replace
```


```javascript
// replace :: String -> String -> String -> String
// replace :: Regex -> String -> String -> String
const replace = needle => strNew => strHaystack =>
    strHaystack.replace(
      'string' !== typeof needle ? (
        needle
      ) : new RegExp(needle, 'g'),
      strNew
    );
```
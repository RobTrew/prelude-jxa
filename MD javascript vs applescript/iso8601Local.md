```applescript
-- iso8601Local :: Date -> String
on iso8601Local(dte)
    (dte as «class isot» as string)
end iso8601Local
```


```javascript
// iso8601Local :: Date -> String
const iso8601Local = dte =>
    new Date(dte - (6E4 * dte.getTimezoneOffset()))
    .toISOString();
```
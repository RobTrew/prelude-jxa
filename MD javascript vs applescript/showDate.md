```javascript
// showDate :: Date -> String
const showDate = JSON.stringify;
```


```applescript
-- ISO 8601 UTC 
-- showDate :: Date -> String
on showDate(dte)
    ((dte - (time to GMT)) as «class isot» as string) & ".000Z"
end showDate
```
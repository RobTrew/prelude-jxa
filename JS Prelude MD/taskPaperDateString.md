```javascript
// taskPaperDateString :: Date -> String
const taskPaperDateString = dte =>
    second(t => t.slice(0, 5))(
        iso8601Local(dte).split("T")
    )
    .join(" ");
```
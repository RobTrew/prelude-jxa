```javascript
// taskPaperDayString :: Date -> String
const taskPaperDayString = dte =>
    take(10)(
        taskPaperDateString(dte)
    );
```
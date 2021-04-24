```applescript
-- taskPaperDateString :: Date -> String
on taskPaperDateString(dte)
    set {d, t} to splitOn("T", dte as «class isot» as string)
    d & space & text 1 thru 5 of t
end taskPaperDateString
```


```javascript
// taskPaperDateString :: Date -> String
const taskPaperDateString = dte => {
    const [d, t] = iso8601Local(dte).split("T");

    return [d, t.slice(0, 5)].join(" ");
};
```
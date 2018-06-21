```applescript
-- regexMatches :: String -> String -> [[String]]on regexMatches(strRegex, strHay)	set ca to current application	set oRgx to ca's NSRegularExpression's regularExpressionWithPattern:strRegex ¬		options:((ca's NSRegularExpressionAnchorsMatchLines as integer)) |error|:(missing value)	set oString to ca's NSString's stringWithString:strHay	set oMatches to oRgx's matchesInString:oString options:0 range:{location:0, |length|:oString's |length|()}		set xs to {}	repeat with oMatch in oMatches		set intMax to ((numberOfRanges of oMatch) as integer) - 1				set subs to {}		repeat with i from 0 to intMax			tell (oMatch's rangeAtIndex:i)				set intFrom to its location				set end of subs to text (intFrom + 1) thru (intFrom + (its |length|)) of strHay			end tell		end repeat		set end of xs to subs			end repeat	return xsend regexMatches
```

```js
// regexMatches :: String -> String -> [[String]]
const regexMatches = (strRgx, strHay) => {
    const rgx = new RegExp(strRgx, 'g');
    let m = rgx.exec(strHay),
        xs = [];
    while (m)(xs.push(m), m = rgx.exec(strHay));
    return xs;
};
```
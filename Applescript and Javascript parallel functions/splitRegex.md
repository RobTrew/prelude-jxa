```applescript
-- splitRegex :: Regex -> String -> [String]
on splitRegex(strRegex, str)
	set lstMatches to regexMatches(strRegex, str)
	if length of lstMatches > 0 then
		script preceding
			on |λ|(a, x)
				set iFrom to start of a
				set iLocn to (location of x)
				
				if iLocn > iFrom then
					set strPart to text (iFrom + 1) thru iLocn of str
				else
					set strPart to ""
				end if
				{parts:parts of a & strPart, start:iLocn + (length of x) - 1}
			end |λ|
		end script
		
		set recLast to foldl(preceding, {parts:[], start:0}, lstMatches)
		
		set iFinal to start of recLast
		if iFinal < length of str then
			parts of recLast & text (iFinal + 1) thru -1 of str
		else
			parts of recLast & ""
		end if
	else
		{str}
	end if
end splitRegex
```

```js
// splitRegex :: Regex -> String -> [String]
const splitRegex = (needle, haystack) =>
    haystack.split(needle);
```
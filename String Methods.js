🧭 Top 20 JavaScript String Methods
#	Method	Description	Example	Output

1	length	Returns the number of characters in a string	'hello'.length	5
2	toUpperCase()	Converts all letters to uppercase	'hello'.toUpperCase()	'HELLO'
3	toLowerCase()	Converts all letters to lowercase	'HELLO'.toLowerCase()	'hello'
4	includes(substring)	Checks if string contains given text	'hello'.includes('he')	true
5	startsWith(substring)	Checks if string starts with text	'hello'.startsWith('he')	true
6	endsWith(substring)	Checks if string ends with text	'hello'.endsWith('lo')	true
7	indexOf(substring)	Returns index of first occurrence	'hello'.indexOf('l')	2
8	lastIndexOf(substring)	Returns index of last occurrence	'hello'.lastIndexOf('l')	3
9	slice(start, end)	Extracts part of a string	'hello world'.slice(0, 5)	'hello'
10	substring(start, end)	Similar to slice, no negative indexes	'hello'.substring(1, 4)	'ell'
11	replace(find, replace)	Replaces first match	'hi hi'.replace('hi','bye')	'bye hi'
12	replaceAll(find, replace)	Replaces all matches	'hi hi'.replaceAll('hi','bye')	'bye bye'
13	trim()	Removes spaces from both ends	' hello '.trim()	'hello'
14	trimStart()	Removes spaces from start	' hi'.trimStart()	'hi'
15	trimEnd()	Removes spaces from end	'hi '.trimEnd()	'hi'
16	split(separator)	Splits string into array	'a,b,c'.split(',')	['a','b','c']
17	concat(str)	Joins strings together	'Hi'.concat('!', ' there')	'Hi! there'
18	repeat(n)	Repeats the string n times	'ha'.repeat(3)	'hahaha'
19	charAt(index)	Returns character at position	'hello'.charAt(1)	'e'
20	match(regex)	Finds match using regex	'abc123'.match(/\d+/)	

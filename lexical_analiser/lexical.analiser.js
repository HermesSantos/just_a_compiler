const text = 'opa b2m dia'

let token = ''
let counter = 0
let state = 0

while (counter < text.length) {
	let currentChar = text[counter]
	console.log(currentChar)
	switch (state) {
		case 0:
			if (isWhiteSpace(currentChar)) {
				counter++
				break	
			} else {
				state = 1
			}
		case 1:
			if (isChar(currentChar)) {
				state = 0
				token += currentChar
				counter++
				break
			} else {
				counter++
				console.log('teste')
			}

	}
}

function isChar(char){
	return /^[a-zA-Z]$/.test(char)
}
function isWhiteSpace(char){
	return /\s/.test(char)
}

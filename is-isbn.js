function isIsbn(){}

isIsbn.prototype.validate = isbn => {
	isbn = String(isbn)
	isbn = isbn.split('')
	if(isbn[9] === "X"){isbn[9] = "10"}
	if(isbn.length === 10){
		let validateSum = isbn => {
			let sum = 0
			isbn.forEach((digit, index) => {
				digit = parseInt(digit)
				sum += digit * (index+1)
			})
			return (sum % 11 === 0)
		}
		let checkSum = isbn => {
			let check = parseInt(isbn.pop()), sum = 0
			isbn = isbn.reverse()
			isbn.forEach((digit, index) => {
				sum += parseInt(digit) * (index+2)
			})
			sum = (11 - (sum % 11)) % 11
			return sum === check
		}
		return validateSum(isbn) && validateSum(isbn.reverse()) && checkSum(isbn)
	} else if (isbn.length === 13){
		let checkSum = isbn => {
			let check = parseInt(isbn.pop()), sum = 0
			isbn.forEach((digit, index) => {
				index++
				if(index%2 === 0){
					sum += parseInt(digit)*3
				} else {
					sum += parseInt(digit)
				}
			})
			return (sum % 10) === check || (10-(sum % 10)) === check
		}
		return checkSum(isbn)
	} else {
		return false
	}
}

module.exports = new isIsbn()
/*
let a = new isIsbn()
let codes = ["030788743X","9780307887436","0670020559","9780670020553","0060523794","9780060523794"]
codes.forEach(v=>{
	console.log(v, a.validate(v))
})
*/
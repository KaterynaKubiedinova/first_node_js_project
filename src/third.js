export function sayAge(years){
	let year = new Date;
	let myAge = year.getFullYear() - years;
	return `I'm ${myAge} years old`
	}
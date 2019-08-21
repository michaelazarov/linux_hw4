//export default function greet () {
function greet () {
	console.log("Hello world")
}
// module.exports = greet
module.exports = {
	hello : greet
}

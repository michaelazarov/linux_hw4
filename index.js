// const greet = require("./greet")
// function run() {
// 	greet.hello () 
// }
// run()
// подключение express
const express = require("express");
// создаем объект приложения
const app = express();

const cats = [
	{
		id :1,
		name: "vasya",
		color: "red",
		age:5,
		sex: "male",
		breed:"home cat"
	},
	{
		id :2,
		name: "masa",
		color: "blue",
		age:2,
		sex: "female",
		breed:"bingale"
	},
	{
		id:3,
		name: "murca",
		color: "yellow",
		age:1,
		sex:"female",
		breed:"egiptian"
	}
]

// определяем обработчик для корневого маршрута "/"
app.get("/", function(request, response){     
    // отправляем ответ
    response.send("<h2>Привет Express!</h2>");
})

app.get("/hello", function(request, response){
    response.send("<h2>I greet you!</h2>");
})

app.get("/cats", function(request, response){
    response.json(cats)
})

app.get("/cat/:id", function(request, response){
	let cat = cats.filter(element => element.id === +request.params.id)
  	!cat[0] ? response.status(404).json({error: "not find"}) : response.json(cat[0])
})


// начинаем прослушивать подключения на 3000 порту
app.listen(3000,function(){console.log("Running on port 3000")});


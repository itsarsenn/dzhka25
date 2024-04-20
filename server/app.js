const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const UserModel = require('./models/UserModel')

require('dotenv').config()

const port = process.env.PORT || 3000
const app = express()


app.use(
	cors({
		origin: ['http://127.0.0.1:5500'],
		methods: 'GET, POST'
	})
)
app.use(bodyParser.json())

mongoose.connect(process.env.URL_MONGODB)




// получение всех пользователей из БД
app.get('/getUsers', async (req, res) => {
	try {
		const users = await UserModel.find({})
		res.send({ users })
		

	} catch (err) {
		console.error('Произошла ошибка при получении пользователей', err)
		res.send({ error: 'Произошла ошибка при получении пользователей' })
	}
})

// добавление нового пользователя в БД
app.post('/addUser', async (req, res) => {
	try {
		const { name,price } = req.body
		const user = { name, price }
		await UserModel.create(user)
		res.send({ message: 'Пользователь успешно добавлен в БД' })
	} catch (err) {
		console.error('Произошла ошибка при добавлении нового пользователя', err)
		res.send({
			error: `Произошла ошибка при добавлении нового пользователя ${err}`
		})
	}
})




  


app.listen(port, () => {
	console.log(`Сервер запущен на порту ${port}`)
})
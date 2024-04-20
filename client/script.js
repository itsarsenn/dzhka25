const req1 = document.querySelector('.req1GET')
const req2 = document.querySelector('.req2POST')



//! GET
const getData = url => {
	return new Promise((resolve, reject) =>
		fetch(url)
			.then(response => response.json())
			.then(json => resolve(json))
			.catch(error => reject(error))
			
	)
}

//! POST
const postData = (url, data) => {
	return new Promise((resolve, reject) =>
		fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: { 'Content-type': 'application/json; charset=UTF-8' }
		})
			.then(response => response.json())
			.then(json => resolve(json))
			.catch(error => reject(error))
	)
}


document.addEventListener('DOMContentLoaded', () => {

const resultElement = document.getElementById('responses');

req1.addEventListener('click', async () => {
	try {
		const users = await getData('http://localhost:3000/getUsers')

		resultElement.innerHTML = JSON.stringify(users);
	} catch (err) {
		console.error('Произошла ошибка при получении пользователей', err)
	}
})
req2.addEventListener('click', async () => {
	let name = prompt('Введите название')
	let price = prompt('Введите цену')
	try {
		let users = {
			name,
			price
		}
		resultElement.innerHTML = JSON.stringify(users);
	} catch (err) {
		console.error('Произошла ошибка при добавлении нового пользователя', err)
	}
})

});
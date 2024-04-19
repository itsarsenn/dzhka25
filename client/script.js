const req1 = document.querySelector('.req1GET')
const req2 = document.querySelector('.req2POST')
const req3 = document.querySelector('.req3GET')


//! GET
const getData = url => {
	return new Promise((resolve, reject) =>
		fetch(url)
			.then(response => response.json())
			.then(json => resolve(json))
			.catch(error => reject(error))
			
	)
}
// const responses = document.querySelector('.responses'); 

// async function getUsers() {
//   try {
//     const url = 'http://127.0.0.1:5500/client/index.html';
//     const response = await fetch(url);
//      const json = await response.json();

//     responses.innerHTML = '';
    
//      json.reverse().forEach(user => {
//       responses.insertAdjacentHTML('beforeend', `
//         <li>
//           <p class="name">${user.name}</p> 
//           <p class="price">${user.price}</p>
//         </li>
//       `)
//     })

//   } catch (err) {
//     console.error('Произошла ошибка при получении пользователей', err);
//   }
// }

// getUsers();

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
req1.addEventListener('click', async () => {
	try {
		const users = await getData('http://localhost:3000/getUsers')

		console.log(users)
	} catch (err) {
		console.error('Произошла ошибка при получении пользователей', err)
	}
})
req2.addEventListener('click', async () => {
	let name = prompt('Введите название')
	let price = prompt('Введите цену')
	try {
		let user = {
			name,
			price
		}
		console.log(user)
	} catch (err) {
		console.error('Произошла ошибка при добавлении нового пользователя', err)
	}
})
req3.addEventListener('click', async () => {
	try {
		const users = await getData('http://localhost:3000/getUsers')

		console.log(users)
	} catch (err) {
		console.error('Произошла ошибка при получении пользователей', err)
	}
})
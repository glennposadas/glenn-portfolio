// const ul = document.getElementById('items')

// ul.firstElementChild.textContent = 'Bitch!'

// const btn = document.querySelector('.button')
// btn.style.background = 'red'

// // btn.addEventListener('mouseout', (event) => {
// //   event.preventDefault()
// //   console.log("submitted!")
  
// //   document.querySelector('#my-form').style.background = 'yellow'
// //   document.querySelector('#items').lastElementChild.innerHTML = '<h1>Hello!</h1>'
// // })

// btn.addEventListener('click', (event) => {
//   event.preventDefault()
//   console.log("submitted!")
  
//   document.querySelector('#my-form').style.background = 'red'
//   document.querySelector('#items').lastElementChild.textContent = 'NEW ITEM NAME'
// })

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onsubmit)

function onsubmit(event) {
  event.preventDefault()

  if (nameInput.value == '' || emailInput.value == '') {
    alert("All fields are required!")
    return
  }

  console.log("SUCCESS! ✅")

}
// const getElement = (selector) => {
//   const element = document.querySelector(selector)

//   if (element) return element
//   throw Error(
//     `Please double check your class names, there is no ${selector} class`
//   )
// }

// const links = getElement('.nav-links')
// const navBtnDOM = getElement('.nav-btn')

// navBtnDOM.addEventListener('click', () => {
//   links.classList.toggle('show-links')
// })

const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    throw Error(
      `Please double checkout your class name, there is no ${selector} class`
    )
  }
}

const links = getElement(".nav-links");
const navBtn = getElement(".nav-btn");

navBtn.addEventListener('click', () => {
  links.classList.toggle("show-links")
})

const element = document.getElementById("date");
const year = new Date().getFullYear();
element.textContent = year;

export const navs = () => {
  return (
    `<ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link">Главная</a>
    </li>
    <li class="nav-item">
      <a class="nav-link">Информация</a>
    </li>
  </ul>`
  )
}

export const toContainer = content => {
  return (
    `<div class="container">
      ${content}
    </div>`
  )
}

export const toCss = (styles = {}) => {
 
  const keys = Object.keys(styles)
  const arr = keys.map(key => {
    return `${key}: ${styles[key]}`
  })

  return arr.join(';')

 /*  return Object.keys(styles).map(key => `${key}: ${styles[key]}`).join(';') */
}

export const onDelete = (deleteBtns, model) => {
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      
    })
  })
}
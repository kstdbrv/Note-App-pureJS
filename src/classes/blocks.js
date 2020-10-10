import { navs, toCss } from "./utils"

class Block {
  constructor(value, options) {
    this.value = value
    this.options = options
  }
  toHTML() {
    throw new Error('метод toHTML должен быть определен')
  }
}

export class Navbar extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const { tag, styles } = this.options
        
    return (
      `<nav class="navbar navbar-${styles.text} navbar-expand-lg bg-${styles.background}">
      <div class="container">
        <${tag} class="navbar-brand">
          ${this.value}
        </${tag}>
        ${ navs() }
   </div>
  </nav>
  <hr>`
    )
  }
}

export class Input extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    return (
     `<form class="container">
     <div class="input-group mb-3">
       <input
        type="text"
        style="${toCss(this.options.styles)}" 
        name="text" class="form-control"
        placeholder="${this.value}"/>
       <div class="input-group-append">
         <button class="btn btn-outline-secondary" type="submit">Записать</button>
       </div>
     </div>
    </form>`
   )
  }
}

export class Note extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    return (
     `<ul class="list-group container">
     <li class="list-group-item note">
       <div>
         <strong>${this.value}</strong>
         <small>09.10.2020</small>
       </div>
     
       <button
        type="button" 
        class="btn btn-outline-danger btm-sm"          
       >
       &times;
       </button>
     </li>
    </ul>`
   )
  }
}
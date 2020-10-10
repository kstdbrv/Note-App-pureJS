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
    console.log(styles)
        
    return (
      `<nav class="navbar navbar-${styles.text} navbar-expand-lg bg-${styles.background}">
      <div class="container">
        <${tag} class="navbar-brand">
          ${this.value}
        </${tag}>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link">Главная</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">Информация</a>
      </li>
    </ul>
   </div>
  </nav>`
    )
  }
}

export class Input extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    <form>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Введите заметку"/>
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">Записать</button>
      </div>
    </div>
  </form>
  }
}

export class Note extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    <ul class="list-group">
    <li class="list-group-item note">
      <div>
        <strong>купить картошку</strong>
        <small>09.10.2020</small>
      </div>
    
      <button
       type="button" 
       class="btn btn-outline-danger btm-sm"          
      >
      &times;
      </button>
    </li>
   </ul>
  }
}
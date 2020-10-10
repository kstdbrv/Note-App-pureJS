import { Note } from './blocks'

export class Site {
  constructor(id, updateCallback) {
    this.id = document.getElementById(id)
    this.update = updateCallback

    this.init() //  запускаем сразу при вызове new Site
  }

  render(model) {
    this.id.innerHTML = ''  // удаляем все содержимое id
    model.forEach(block => {
      this.id.insertAdjacentHTML('beforeend', block.toHTML()) 
    })
  }

  init() {
    this.id.addEventListener('submit', this.add.bind(this))
  }

  add(event) {
    event.preventDefault()

    const text = event.target.text.value
    const newNote = new Note(text)

    this.update(newNote)

    event.target.text.value = ''   // очищаем поля ввода
  }
}
import { Site } from '../classes/site'
import { Notes } from './notes'

export class App {
  constructor(model) {
    this.model = model
  }
  init() {
    const updateCallback = newNote => {  // вызывается при событии добавления заметки
      delete this.model[2]   // удаляет эл-т массива и не перезаписывая индексы (удаляем заглушку)

      this.model.push(newNote)
      site.render(this.model)
    }

    const site = new Site('site', updateCallback)
    site.render(this.model)

    new Notes('notes')
  }
}
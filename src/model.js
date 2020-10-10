import { Note, Navbar, Input } from './classes/blocks'

export const model = [
  new Navbar('Note App based on pure JS', {
    tag: 'div',
    styles: {
      text: 'dark',           /* light */
      background: 'primary'   /* light */
    }
  }),

  new Input('введите текст', {
    styles: {
      color: '#000'
    }
  }),

  new Note('здесь могла быть ваша заметка', {
    styles: {
      color: 'black'
    }
  })
]
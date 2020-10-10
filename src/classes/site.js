

export class Site {
  constructor(id) {
    this.id = document.getElementById(id)
  }
  render(model) {
    model.forEach(block => {
      this.id.insertAdjacentHTML('afterbegin', block.toHTML()) 
    })
  }
}
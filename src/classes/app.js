import { Site } from '../classes/site'

export class App {
  constructor(model) {
    this.model = model
  }
  init() {
    const site = new Site('navbar')
    site.render(this.model)
  }
}
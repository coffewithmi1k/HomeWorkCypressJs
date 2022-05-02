export default class JSPage {
  titleLocator = 'h1';

  constructor() {
    this.url = 'js';
  }

  getTitle() {
    return cy.get(this.titleLocator);
  }
}

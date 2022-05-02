export default class HomePage {
  titleLocator = '.learntocodeh1';
  searchFieldLocator = '#search2';

  constructor() {
    this.url = '/';
  }

  getTitlte() {
    return cy.get(this.titleLocator)
      .last();
  }

  typeSearchValue(value) {
    cy.get(this.searchFieldLocator)
      .type(value)
      .type('{enter}');
  }
}

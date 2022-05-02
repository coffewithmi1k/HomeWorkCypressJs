import HomePage from '../../elements/HomePage';
import JSPage from '../../elements/JSPage';

describe('Home Page Tests: ', () => {
  const homePage = new HomePage();
  const jSPage = new JSPage();

  beforeEach(() => {
    cy.visit('/');
  });

  it('verifies search with valid value', () => {
    homePage
      .typeSearchValue('javascript');

    jSPage
      .getTitle()
      .should('be.visible')
      .should('contain', 'JavaScript');
  });
});

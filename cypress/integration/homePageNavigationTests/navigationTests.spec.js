/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { whereToStartTitle } from '../../constants/whereToStartElements';
import { notSureWhereBeginLinkWE } from '../../constants/homePageElements';
import HomePage from '../../elements/HomePage';

describe('Home Page Tests: ', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    cy.visit('/');
  });

  it('Opens Home Page', () => {
    homePage
      .getTitlte()
      .should('be.visible');
  });

  it('It verifies "Not Sure where to begin" redirects to studding plan', () => {
    cy.get(notSureWhereBeginLinkWE)
      .first()
      .click();

    cy.get(whereToStartTitle)
      .should('contain', 'Where To Start');
  });
});

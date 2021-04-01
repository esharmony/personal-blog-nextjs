/// <reference types="cypress" />

describe('homepage', () => {
  it('navigates to a category page', () => {
    cy.visit('/');
    cy.contains('Sabbatical dev');
    cy.get('a')
      .first()
      .then(($a) => {
        const txt = $a.text();
        const trimmed = txt.trim();
        const slug = trimmed.replace(/\s/g, '-');
        cy.get('a').first().click();
        cy.location('pathname').should('eq', `/posts/${slug}`);
      });
  });

  it('navigates to the correct post page from a post that can be read', () => {
    cy.visit('/');
    cy.contains('Sabbatical dev');
    cy.get('a')
      .contains('read')
      .first()
      .then(($a) => {
        cy.get($a.parent().siblings('h1')).then(($h1) => {
          const txt = $h1.text();
          const trimmed = txt.trim();
          const slug = trimmed.replace(/\s/g, '-');
          cy.get('a').contains('read').first().click();
          cy.location('pathname').should('eq', `/post/${slug}`);
        });
      });
  });
});

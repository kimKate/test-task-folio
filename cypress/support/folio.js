import { TextField } from '@interactors/html';

const searchXpath = 'input[title="Qidirish"]';
const resaultsXpath = 'div[class="jtfYYd"]';
const folioUrl = 'https://www.folio.org'

function search(searchQuery) {
  cy.do(
    TextField().fillIn(searchQuery)
  )
  cy.get(searchXpath).type(' {enter} ')
}

function checkSearchResult() {

  // cy.expect(SearchResults(including(folioWebsite)).is({ visible: true }));

  cy.get(resaultsXpath).eq(0).within(($resultNode) => {
    cy.get('cite').should('contain', folioUrl)
  })
}

export default {
  search,
  checkSearchResult
}   
const searchXpath = 'input[title="Qidirish"]';
const resaultsXpath = 'div[class="hlcw0c"]';
const folioUrl = 'https://www.folio.org'

function search(searchQuery) {
  cy.get(searchXpath).type(`${searchQuery} {enter}`)
}

function checkSearchResult() {
  cy.get(resaultsXpath).eq(0).within(($resultNode) => {
    cy.get('cite').should('contain', folioUrl)
  })
}

export default {
  search,
  checkSearchResult
}   
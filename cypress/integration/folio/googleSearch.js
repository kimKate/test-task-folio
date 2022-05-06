/// <reference types="cypress" />

import { search, checkSearchResult } from '../../support/folio'

describe('Search "Folio" in Google', () => {
    before(() => {
        cy.visit('/')
    })

    it('A1', () => {
        search('folio')
        checkSearchResult()
    })
})
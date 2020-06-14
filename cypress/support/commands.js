import * as _ from 'lodash'
import { SELECTOR } from '../constants'

Cypress.Commands.add('press', (key, times = 1) => {
  const $body = cy.get('body')
  _.times(times, () => {
    $body.trigger('keypress', { key })
  })
})

Cypress.Commands.add('assertCursor', (y, x, char) => {
  if (char) {
    cy.get(SELECTOR.CURSOR)
      .should('have.text', char)
      .should('have.attr', 'style')
      .should('contain', `top: ${y}em;`)
      .should('contain', `left: ${x}ch;`)
  } else {
    cy.get(SELECTOR.CURSOR)
      .should('have.attr', 'style')
      .should('contain', `top: ${y}em;`)
      .should('contain', `left: ${x}ch;`)
  }
})

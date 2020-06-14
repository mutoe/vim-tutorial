import { SELECTOR } from '../constants'

describe('# Motion', () => {
  before(() => {
    cy.visit('/')
  })

  describe('## move between characters', () => {
    describe('move right', () => {
      it('should move right normally', () => {
        cy.press('l', 2)
        cy.assertCursor(0, 2, 'r')
      })

      it('should no longer move to the right when the cursor is already on the far right')
    })

    describe('move left', () => {
      it('should move left normally', () => {
        cy.press('h', 1)
        cy.assertCursor(0, 1, 'o')
      })

      it('should no longer move to the left when the cursor is already on the far left', () => {
        cy.press('h', 2)
        cy.assertCursor(0, 0)
      })
    })
  })

  describe.skip('## move between words', () => {
    describe('move to the beginning of the next word', () => {
      it('should locate correctly', () => {
        cy.press('w')
        cy.assertCursor(0, 6, 'i')
      })

      it('should locate to next hard-word correctly', () => {

      })
    })
  })
})

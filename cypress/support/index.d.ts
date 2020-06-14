/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    press (key: string, times?: number): void
    assertCursor (y: number, x: number, char?: string): void
  }
}

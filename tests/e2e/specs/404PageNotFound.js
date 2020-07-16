describe('404 page not found', () => {
	beforeEach(() => {
		cy.visitRandomURL()
	})

	it('Should contain a 404 error message', () => {
		const expectedErrorMessage = 'UPS! Error: 404. Page not found ☹️'
		cy.get('[data-cy=page-not-found]').invoke('text').should('be.equal', expectedErrorMessage)
	})
})

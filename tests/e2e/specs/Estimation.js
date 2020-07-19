describe('Estimation', () => {
	const validValues = ['0', '0.5', '1', '2', '3', '5', '8', '13', '20']

	const smallDelay = 100

	beforeEach(() => {
		cy.visit('/')
	})

	it('Should get an estimation', () => {
		cy.get('[data-cy=estimation-uncertainty-select]').select('low')
		cy.get('[data-cy=estimation-uncertainty-select]').should('have.value', 'low')
		cy.get('[data-cy=estimation-volume-select]').select('low')
		cy.get('[data-cy=estimation-volume-select]').should('have.value', 'low')
		cy.wait(smallDelay)

		cy.get('[data-cy=estimation-result]').invoke('text').should('to.be.oneOf', validValues)
		cy.get('[data-cy=estimation-result-tip]').should('not.be.visible')
	})

	it('Should get an estimation and show a tip', () => {
		cy.get('[data-cy=estimation-uncertainty-select]').select('very-high')
		cy.get('[data-cy=estimation-uncertainty-select]').should('have.value', 'very-high')
		cy.get('[data-cy=estimation-volume-select]').select('very-high')
		cy.get('[data-cy=estimation-volume-select]').should('have.value', 'very-high')
		cy.wait(smallDelay)

		cy.get('[data-cy=estimation-result]').invoke('text').should('to.be.oneOf', validValues)
		cy.get('[data-cy=estimation-result-tip]').should('be.visible')
	})

	it('Should be able to reset selectors', () => {
		cy.get('[data-cy=estimation-uncertainty-select]').select('')
		cy.get('[data-cy=estimation-uncertainty-select]').should('have.value', '')
		cy.get('[data-cy=estimation-volume-select]').select('')
		cy.get('[data-cy=estimation-volume-select]').should('have.value', '')
		cy.wait(smallDelay)

		cy.get('[data-cy=estimation-result]').invoke('text').should('to.be.equal', '')
		cy.get('[data-cy=estimation-result-tip]').should('not.be.visible')
	})

	it('Should be able to estimate as question mark', () => {
		cy.get('[data-cy=estimation-question-mark-button]').click()
		cy.wait(smallDelay)

		cy.get('[data-cy=estimation-result]').invoke('text').should('not.to.be.oneOf', validValues)
		cy.get('[data-cy=estimation-result]').invoke('text').should('to.be.equal', '?')
		cy.get('[data-cy=estimation-result-tip]').should('not.be.visible')
	})

	it('Should be able to re-estimate after an estimation', () => {
		cy.get('[data-cy=estimation-uncertainty-select]').select('low')
		cy.get('[data-cy=estimation-volume-select]').select('low')
		cy.wait(smallDelay)

		cy.get('[data-cy=estimation-result]').then(($result) => {
			const resultValue = $result.text()

			cy.get('[data-cy=estimation-volume-select]').select('very-high')
			cy.wait(smallDelay)

			cy.get('[data-cy=estimation-result]').invoke('text').should('not.to.be.equal', resultValue)
		})
	})
})

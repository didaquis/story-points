describe('Nav menu of the site', () => {

	const listOfMainRoutes = [
		'/',
		'/info'
	]

	const expectedErrorMessage = 'UPS! Error: 404. Page not found ☹️'

	before(() => {
		cy.visit('/')
	})

	context('1080p resolution', () => {
		beforeEach(() => {
			// run these tests as if in a desktop
			cy.viewport(1920, 1080)
		})

		it('Should have visible a brand link to home', () => {
			cy.get('[data-cy=navbar]').should('be.visible')
			cy.get('[data-cy=brand-link]').should('be.visible')
			cy.get('[data-cy=navbar-burguer]').should('not.be.visible')
		})

		it('Should be able to navigate across the main routes of website', () => {
			cy.get('[data-cy=navbar]').find('a').each((link) => {
				const pathNameOfLink = link[0].pathname
				if (listOfMainRoutes.includes(pathNameOfLink)) {
					cy.wrap(link).click()
					cy.wait(200)
					cy.get('[data-cy=main-content]').should('not.be.empty')
					cy.get('[data-cy=main-content]').invoke('text').should('not.be.equal', expectedErrorMessage)
				}
			})
			cy.get('[data-cy=brand-link]').click()
		})
	})

	context('iPhone-6 resolution', () => {
		beforeEach(() => {
			// run these tests as if in a mobile browser and ensure the responsive UI is correct
			cy.viewport('iphone-6')
			cy.reload(true)
		})

		it('Should have visible a brand link to home', () => {
			cy.get('[data-cy=navbar]').should('be.visible')
			cy.get('[data-cy=brand-link]').should('be.visible')
			cy.get('[data-cy=navbar-burguer]').should('be.visible')
		})

		it('Should be able to navigate to home from every route of website', () => {
			listOfMainRoutes.forEach(route => {
				cy.visit(route)
				cy.wait(200)
				cy.get('[data-cy=brand-link]').click()
				cy.get('[data-cy=main-content]').should('not.be.empty')
				cy.get('[data-cy=main-content]').invoke('text').should('not.be.equal', expectedErrorMessage)
			})
		})

		it('Should be able to navigate across the main routes of website', () => {
			cy.get('[data-cy=navbar-burguer-links]').find('a').each((link) => {
				cy.get('[data-cy=navbar-burguer]').click()
				cy.wait(1200) // Wait for burguer animation

				const pathNameOfLink = link[0].pathname
				if (listOfMainRoutes.includes(pathNameOfLink)) {
					cy.log(`Cheking the URL: ${pathNameOfLink}`)
					cy.wrap(link).click()
					cy.wait(1200)
					cy.get('[data-cy=main-content]').should('not.be.empty')
					cy.get('[data-cy=main-content]').invoke('text').should('not.be.equal', expectedErrorMessage)
				}
			})
			cy.get('[data-cy=brand-link]').click()
		})
	})
})

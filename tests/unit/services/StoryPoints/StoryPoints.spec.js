
import StoryPointsService from '@/services/StoryPoints/StoryPointsService'

import { rules } from '../../fixtures/services/StoryPoints/rules'

describe('StoryPointsService', () => {

	let service
	let validValues

	const fakeRules = rules

	beforeEach(() => {
		service = new StoryPointsService(fakeRules)
		validValues = [0, 0.5, 1, 2, 3, 5, 8, 13, 20]
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})

	it('should contain a metho called calculate', () => {
		expect(service.calculate).toBeDefined()
	})

	describe('calculate method', () => {
		it('should throw an error if not receive any parameter', () => {
			expect(() => {
				service.calculate()
			}).toThrow()
		})

		it('should throw an error if not receive a valid first params', () => {
			expect(() => {
				service.calculate('foo', 'very-low')
			}).toThrow()
		})

		it('should throw an error if not receive a valid second params', () => {
			expect(() => {
				service.calculate('very-low', 'bar')
			}).toThrow()
		})

		it('should return 0 if receive "very-low" and "very-low" as parameters', () => {
			const result = service.calculate('very-low', 'very-low')
			expect (result).toBe(0)
		})

		it('should return 0.5 if receive "low" and "very-low" as parameters', () => {
			const result = service.calculate('low', 'very-low')
			expect (result).toBe(0.5)
		})

		it('should return 2 if receive "medium" and "very-low" as parameters', () => {
			const result = service.calculate('medium', 'very-low')
			expect (result).toBe(2)
		})

		it('should return 5 if receive "high" and "very-low" as parameters', () => {
			const result = service.calculate('high', 'very-low')
			expect (result).toBe(5)
		})

		it('should return 8 if receive "very-high" and "very-low" as parameters', () => {
			const result = service.calculate('very-high', 'very-low')
			expect (result).toBe(8)
		})

		it('should return 0.5 if receive "very-low" and "low" as parameters', () => {
			const result = service.calculate('very-low', 'low')
			expect (result).toBe(0.5)
		})

		it('should return 2 if receive "very-low" and "medium" as parameters', () => {
			const result = service.calculate('very-low', 'medium')
			expect (result).toBe(2)
		})
	})
})

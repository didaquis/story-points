
import StoryPointsService from '@/services/StoryPoints/StoryPointsService'

describe('StoryPointsService', () => {

	let service
	let validValues
	let validParameters

	beforeEach(() => {
		service = new StoryPointsService()
		validValues = [0, 0.5, 1, 2, 3, 5, 8, 13, 20]
		validParameters = ['very-low', 'low', 'medium', 'high', 'very-high']
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})

	it('should contain a method called calculate', () => {
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

		it('should return valid value if receive valid param', () => {
			validParameters.forEach((arg) => {
				for (let index = 0; index < validParameters.length; index++) {
					const result = service.calculate(arg, validParameters[index])
					expect(validValues.includes(result)).toBe(true)
				}
			})
		})

		it('should retun valid estimation if receive "very-low" as first param', () => {
			expect(service.calculate('very-low', 'very-low')).toBe(0)
			expect(service.calculate('very-low', 'low')).toBe(0.5)
			expect(service.calculate('very-low', 'medium')).toBe(2)
			expect(service.calculate('very-low', 'high')).toBe(5)
			expect(service.calculate('very-low', 'very-high')).toBe(8)
		})

		it('should retun valid estimation if receive "low" as first param', () => {
			expect(service.calculate('low', 'very-low')).toBe(0.5)
			expect(service.calculate('low', 'low')).toBe(1)
			expect(service.calculate('low', 'medium')).toBe(3)
			expect(service.calculate('low', 'high')).toBe(5)
			expect(service.calculate('low', 'very-high')).toBe(8)
		})

		it('should retun valid estimation if receive "medium" as first param', () => {
			expect(service.calculate('medium', 'very-low')).toBe(2)
			expect(service.calculate('medium', 'low')).toBe(3)
			expect(service.calculate('medium', 'medium')).toBe(5)
			expect(service.calculate('medium', 'high')).toBe(8)
			expect(service.calculate('medium', 'very-high')).toBe(8)
		})

		it('should retun valid estimation if receive "high" as first param', () => {
			expect(service.calculate('high', 'very-low')).toBe(5)
			expect(service.calculate('high', 'low')).toBe(5)
			expect(service.calculate('high', 'medium')).toBe(8)
			expect(service.calculate('high', 'high')).toBe(13)
			expect(service.calculate('high', 'very-high')).toBe(13)
		})

		it('should retun valid estimation if receive "very-high" as first param', () => {
			expect(service.calculate('very-high', 'very-low')).toBe(8)
			expect(service.calculate('very-high', 'low')).toBe(8)
			expect(service.calculate('very-high', 'medium')).toBe(8)
			expect(service.calculate('very-high', 'high')).toBe(13)
			expect(service.calculate('very-high', 'very-high')).toBe(20)
		})

	})
})

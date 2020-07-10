
import StoryPointsService from '@/services/StoryPoints/StoryPointsService'

describe('StoryPointsService', () => {

	let service

	const rules = {}

	beforeEach(() => {
		service = new StoryPointsService(rules)
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})
})

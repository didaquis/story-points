class StoryPointsService {

	constructor (rules) {
		this.rules = rules
		this.validValues = ['very-low', 'low', 'medium', 'high', 'very-high']
	}

	calculate (x, y) {
		if (!this.validValues.includes(x) || !this.validValues.includes(y)) {
			throw 'Unknow values'
		}

		switch (x) {
			case this.validValues[0]:
				switch (y) {
					case this.validValues[0]:
						return 0
					case this.validValues[1]:
						return 0.5
					case this.validValues[2]:
						return 2
					case this.validValues[3]:
						return 5
					case this.validValues[4]:
						return 8
				}
			case this.validValues[1]:
				return 0.5
			case this.validValues[2]:
				return 2
			case this.validValues[3]:
				return 5
			case this.validValues[4]:
				return 8
		}
	}
}

export default StoryPointsService

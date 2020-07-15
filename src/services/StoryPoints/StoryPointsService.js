/* eslint-disable no-fallthrough */

class StoryPointsService {

	/*

		+-----------+----------+-----+--------+------+-----------+
		| very-high | 8        | 8   | 8      | 13   | 20        |
		+-----------+----------+-----+--------+------+-----------+
		| high      | 5        | 5   | 8      | 13   | 13        |
		+-----------+----------+-----+--------+------+-----------+
		| medium    | 2        | 3   | 5      | 8    | 8         |
		+-----------+----------+-----+--------+------+-----------+
		| low       | 0.5      | 1   | 3      | 5    | 8         |
		+-----------+----------+-----+--------+------+-----------+
		| very-low  | 0        | 0.5 | 2      | 5    | 8         |
		+-----------+----------+-----+--------+------+-----------+
		|           | very-low | low | medium | high | very-high |
		+-----------+----------+-----+--------+------+-----------+

	*/




	constructor (rules) {
		this.rules = rules
		this.validValues = ['very-low', 'low', 'medium', 'high', 'very-high']
	}

	calculate (uncertainty, volume) {
		if (!this.validValues.includes(uncertainty) || !this.validValues.includes(volume)) {
			throw 'Unknow values'
		}

		switch (uncertainty) {
			case this.validValues[0]:
				switch (volume) {
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
				switch (volume) {
					case this.validValues[0]:
						return 0.5
					case this.validValues[1]:
						return 1
					case this.validValues[2]:
						return 3
					case this.validValues[3]:
						return 5
					case this.validValues[4]:
						return 8
				}
			case this.validValues[2]:
				switch (volume) {
					case this.validValues[0]:
						return 2
					case this.validValues[1]:
						return 3
					case this.validValues[2]:
						return 5
					case this.validValues[3]:
						return 8
					case this.validValues[4]:
						return 8
				}
			case this.validValues[3]:
				switch (volume) {
					case this.validValues[0]:
						return 5
					case this.validValues[1]:
						return 5
					case this.validValues[2]:
						return 8
					case this.validValues[3]:
						return 13
					case this.validValues[4]:
						return 13
				}
			case this.validValues[4]:
				switch (volume) {
					case this.validValues[0]:
						return 8
					case this.validValues[1]:
						return 8
					case this.validValues[2]:
						return 8
					case this.validValues[3]:
						return 13
					case this.validValues[4]:
						return 20
				}
		}
	}
}

export default StoryPointsService

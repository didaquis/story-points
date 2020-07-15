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


	constructor () {
		this.level = {
			'very-low': 'very-low',
			'low': 'low',
			'medium': 'medium',
			'high': 'high',
			'very-high': 'very-high'
		}
	}

	calculate (uncertainty, volume) {
		if (!Object.values(this.level).includes(uncertainty) || !Object.values(this.level).includes(volume)) {
			throw 'Unknow values'
		}

		switch (uncertainty) {
			case this.level['very-low']:
				switch (volume) {
					case this.level['very-low']:
						return 0
					case this.level['low']:
						return 0.5
					case this.level['medium']:
						return 2
					case this.level['high']:
						return 5
					case this.level['very-high']:
						return 8
				}
			case this.level['low']:
				switch (volume) {
					case this.level['very-low']:
						return 0.5
					case this.level['low']:
						return 1
					case this.level['medium']:
						return 3
					case this.level['high']:
						return 5
					case this.level['very-high']:
						return 8
				}
			case this.level['medium']:
				switch (volume) {
					case this.level['very-low']:
						return 2
					case this.level['low']:
						return 3
					case this.level['medium']:
						return 5
					case this.level['high']:
						return 8
					case this.level['very-high']:
						return 8
				}
			case this.level['high']:
				switch (volume) {
					case this.level['very-low']:
						return 5
					case this.level['low']:
						return 5
					case this.level['medium']:
						return 8
					case this.level['high']:
						return 13
					case this.level['very-high']:
						return 13
				}
			case this.level['very-high']:
				switch (volume) {
					case this.level['very-low']:
						return 8
					case this.level['low']:
						return 8
					case this.level['medium']:
						return 8
					case this.level['high']:
						return 13
					case this.level['very-high']:
						return 20
				}
		}
	}
}

export default StoryPointsService

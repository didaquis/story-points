<template>
	<form class="mb-4">
		<div class="form-group">
			<label for="uncertaintySelect">Incertidumbre:</label>
			<select class="form-control form-control-lg" id="uncertaintySelect" v-model="uncertaintyValue" @change="onChangeUncertaintySelect($event)" data-cy="estimation-uncertainty-select">
				<option></option>
				<option value="very-low">Muy baja</option>
				<option value="low">Baja</option>
				<option value="medium">Media</option>
				<option value="high">Alta</option>
				<option value="very-high">Muy alta</option>
			</select>
		</div>
		<div class="form-group">
			<label for="volumeOfWorkSelect">Volumen:</label>
			<select class="form-control form-control-lg" id="volumeOfWorkSelect" v-model="volumeOfWorkValue" @change="onChangeVolumeOfWorkSelect($event)" data-cy="estimation-volume-select">
				<option></option>
				<option value="very-low">Muy bajo</option>
				<option value="low">Bajo</option>
				<option value="medium">Medio</option>
				<option value="high">Alto</option>
				<option value="very-high">Muy alto</option>
			</select>
		</div>
		<button type="button" class="btn btn-primary btn-lg px-5 mt-1 font-weight-bold" @click.prevent="onClickQuestionMarkButton" data-cy="estimation-question-mark-button">?</button>
	</form>
</template>

<script>
import StoryPointsService from '@/services/StoryPoints'
import { ref } from 'vue'

export default {
	name: 'EstimationForm',
	setup(_, { emit }) {
		const uncertaintyValue = ref(null)
		const volumeOfWorkValue = ref(null)

		const resetValues = () => {
			uncertaintyValue.value = null
			volumeOfWorkValue.value = null
		}

		const emitTheEstimation = (value) => {
			emit('result-of-estimation', value)
		}

		const updateEstimation = () => {
			let estimation = ''
			if (uncertaintyValue.value && volumeOfWorkValue.value) {
				estimation = StoryPointsService.calculate(uncertaintyValue.value, volumeOfWorkValue.value)
			}
			emitTheEstimation(estimation)
		}

		const onChangeUncertaintySelect = (event) => {
			uncertaintyValue.value = event.target.value || null
			updateEstimation()
		}

		const onChangeVolumeOfWorkSelect = (event) => {
			volumeOfWorkValue.value = event.target.value || null
			updateEstimation()
		}

		const onClickQuestionMarkButton = () => {
			emitTheEstimation('?')
			resetValues()
		}

		return {
			uncertaintyValue,
			volumeOfWorkValue,
			onClickQuestionMarkButton,
			onChangeUncertaintySelect,
			onChangeVolumeOfWorkSelect,
		}
	}
}
</script>

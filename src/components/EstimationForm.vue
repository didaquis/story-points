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

export default {
	data() {
		return {
			uncertaintyValue: null,
			volumeOfWorkValue: null,
		}
	},
	methods: {
		onChangeUncertaintySelect: function(event) {
			this.uncertaintyValue = event.target.value || null
			this.updateEstimation()
		},
		onChangeVolumeOfWorkSelect: function(event) {
			this.volumeOfWorkValue = event.target.value || null
			this.updateEstimation()
		},
		onClickQuestionMarkButton: function() {
			this.emitTheEstimation('?')
			this.resetValues()
		},
		resetValues: function() {
			this.uncertaintyValue = null
			this.volumeOfWorkValue = null
		},
		updateEstimation: function() {
			let estimation = ''
			if (this.uncertaintyValue && this.volumeOfWorkValue) {
				estimation = StoryPointsService.calculate(this.uncertaintyValue, this.volumeOfWorkValue)
			}
			this.emitTheEstimation(estimation)
		},
		emitTheEstimation: function(value) {
			this.$emit('result-of-estimation', value)
		},
	}
}
</script>

<template>
	<div class="card">
		<div class="card-body">
			<h3 class="card-title text-dark text-center my-0">{{ estimationValue }}</h3>
		</div>
		<div class="card-footer text-muted" v-show="isBigEstimation">
			<span role="img" aria-label="Aviso" class="mr-2">⚠️</span> Considera dividir esta incidencia en otras más pequeñas!
		</div>
	</div>
</template>

<script>
export default {
	name: 'EstimationResultBox',
	props: {
		estimationValue: {
			type: [String, Number],
			default: ''
		}
	},
	data() {
		return {
			isBigEstimation: this.estimationValue >= 8
		}
	}
}
</script>

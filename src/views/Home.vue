<template>
	<section class="col-lg-8 offset-lg-2">
		<Title text="Selecciona los valores"/>
		<EstimationForm @result-of-estimation="handleEstimation" />
		<EstimationResultBox :estimation-value="estimationResult" />
	</section>
</template>

<script>
import Title from '@/components/Title.vue'
import EstimationForm from '@/components/EstimationForm.vue'
import EstimationResultBox from '@/components/EstimationResultBox.vue'

export default {
	name: 'Home',
	components: {
		Title,
		EstimationForm,
		EstimationResultBox,
	},
	data() {
		return {
			estimationResult: ''
		}
	},
	methods: {
		handleEstimation: function(value) {
			this.estimationResult = value
		}
	}
}
</script>

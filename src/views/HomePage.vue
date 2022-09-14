<template>
	<section class="col-lg-8 offset-lg-2">
		<SectionTitle text="Selecciona los valores"/>
		<EstimationForm @result-of-estimation="handleEstimation" />
		<EstimationResultBox :estimation-value="estimationResult" />
	</section>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue'
import EstimationForm from '@/components/EstimationForm.vue'
import EstimationResultBox from '@/components/EstimationResultBox.vue'
import { ref } from 'vue'

export default {
	name: 'HomePage',
	components: {
		SectionTitle,
		EstimationForm,
		EstimationResultBox,
	},
	setup () {
		const estimationResult = ref('')

		const handleEstimation = (value) => {
			estimationResult.value = value
		}

		return {
			estimationResult,
			handleEstimation
		}
	}
}
</script>

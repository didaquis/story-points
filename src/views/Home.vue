<template>
	<div>
		<Title text="Selecciona los valores"/>
		<EstimationForm />
		<EstimationResultBox :estimation-value="estimationResult" />
	</div>
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
			estimationResult: 2
		}
	}
}
</script>

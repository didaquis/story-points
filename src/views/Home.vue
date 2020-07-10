<template>
	<div>
		<Title text="Welcome to Your Vue.js App"/>
		<EstimationForm />
		<EstimationResultBox />
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
	}
}
</script>

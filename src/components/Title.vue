<template>
	<h2 class="mb-3 text-center">{{ text }}</h2>
</template>

<script>
export default {
	name: 'Title',
	props: {
		text: {
			type: String,
			required: true,
		}
	}
}
</script>

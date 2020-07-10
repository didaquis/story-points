<template>
	<div>
		<h2 class="mb-3">{{ text }}</h2>
	</div>
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

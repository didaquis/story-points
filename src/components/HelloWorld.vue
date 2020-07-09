<template>
	<div>
		<h1 class="text-white">{{ msg }}</h1>
		<h1 class="text-white-50">{{ msg }}</h1>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String
	}
}
</script>

<template>
	<div class="bg-dark bg-dark h-100 min-vh-100">
		<teleport to="head">
			<title>Story Points</title>
			<meta name="description" content="Story Points es una aplicación que te permite realizar estimaciones">
			<meta name="robots" content="index,follow">
		</teleport>
		<header>
			<NavBar />
		</header>
		<main role="main" class="container text-white pb-5" data-cy="main-content">
			<router-view />
		</main>
	</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

export default {
	name: 'App',
	components: {
		NavBar
	},
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
</style>

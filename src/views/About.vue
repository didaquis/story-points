<template>
	<section>
		<Title text="Información"/>
		<p class="lead">Story Points es una aplicación que te permite realizar estimaciones</p>
		<h3>¿Por qué he creado esta aplicación?</h3>
		<p>A veces los equipos Scrum tienen problemas para encontrar aquellos criterios para estimar historias de usuario. Esta aplicación trata de simplificar el proceso para conseguir estimaciones más precisas.</p>
		<h3>¿Cómo se usa?</h3>
		<p>Cuando necesites realizar una estimación, sitúate en la pantalla inicial y selecciona el nivel de incertidumbre y el nivel de volumen que consideres que tiene esa tarea. La aplicación te mostrará el resultado de tu estimación de manera automática.
		<br>
		Si en algún momento, consideras que no estás capacitado para determinar el valor de incertidumbre y/o volumen, pulsa el botón con el símbolo de interrogación para indicar que no puedes estimar esa tarea.</p>
		<Credits />
	</section>
</template>

<script>
import Title from '@/components/Title.vue'
import Credits from '@/components/Credits.vue'

export default {
	name: 'About',
	components: {
		Title,
		Credits,
	}
}
</script>

<style scoped>
h3 {
	margin-top: 1.2em;
}
</style>

<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4 border-bottom border-white" data-cy="navbar">
		<div class="container">
			<router-link class="navbar-brand" to="/" data-cy="brand-link">Story points</router-link>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" data-cy="navbar-burguer" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav" data-cy="navbar-burguer-links">
				<ul class="navbar-nav">
					<li class="nav-item">
						<router-link class="nav-link" data-toggle="collapse" data-target="#navbarNav" to="/">Inicio</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" data-toggle="collapse" data-target="#navbarNav" to="/info">Información</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

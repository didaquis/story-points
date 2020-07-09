<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4 border-bottom border-white">
		<div class="container">
			<router-link class="navbar-brand" to="/">Story points</router-link>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item">
						<router-link class="nav-link" to="/">Home</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/about">About</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

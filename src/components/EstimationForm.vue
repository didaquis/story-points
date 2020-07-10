<template>
	<form class="mb-4">
		<div class="form-group">
			<label for="uncertaintySelect">Incertidumbre:</label>
			<select class="form-control form-control-lg" id="uncertaintySelect">
				<option></option>
				<option value="very-low">Muy baja</option>
				<option value="low">Baja</option>
				<option value="half">Media</option>
				<option value="high">Alta</option>
				<option value="very-high">Muy alta</option>
			</select>
		</div>
		<div class="form-group">
			<label for="volumeOfWorkSelect">Volumen:</label>
			<select class="form-control form-control-lg" id="volumeOfWorkSelect">
				<option></option>
				<option value="very-low">Muy bajo</option>
				<option value="low">Bajo</option>
				<option value="half">Medio</option>
				<option value="high">Alto</option>
				<option value="very-high">Muy alto</option>
			</select>
		</div>
		<button type="button" class="btn btn-primary btn-lg px-5 mt-1 font-weight-bold">?</button>
	</form>
</template>

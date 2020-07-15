<template>
	<form class="mb-4">
		<div class="form-group">
			<label for="uncertaintySelect">Incertidumbre:</label>
			<select class="form-control form-control-lg" id="uncertaintySelect" @change="onChangeUncertaintySelect($event)">
				<option></option>
				<option value="very-low">Muy baja</option>
				<option value="low">Baja</option>
				<option value="medium">Media</option>
				<option value="high">Alta</option>
				<option value="very-high">Muy alta</option>
			</select>
		</div>
		<div class="form-group">
			<label for="volumeOfWorkSelect">Volumen:</label>
			<select class="form-control form-control-lg" id="volumeOfWorkSelect" @change="onChangeVolumeOfWorkSelect($event)">
				<option></option>
				<option value="very-low">Muy bajo</option>
				<option value="low">Bajo</option>
				<option value="medium">Medio</option>
				<option value="high">Alto</option>
				<option value="very-high">Muy alto</option>
			</select>
		</div>
		<button type="button" class="btn btn-primary btn-lg px-5 mt-1 font-weight-bold" @click.prevent="onClickQuestionMarkButton">?</button>
	</form>
</template>

<script>
export default {
	methods: {
		onChangeUncertaintySelect: function(event){
			console.log('onChangeUncertaintySelect function')
			console.log(event.target.value)
		},
		onChangeVolumeOfWorkSelect: function(event){
			console.log('onChangeVolumeOfWorkSelect function')
			console.log(event.target.value)
		},
		onClickQuestionMarkButton: function() {
			console.log('onClickQuestionMarkButton function')
		}
	}
}
</script>

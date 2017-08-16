<template>
	<div :class="$style.bookshelf">
		<slot></slot>
	</div>
</template>

<script>
export default {
  name: 'bookshelf',
}
</script>

<style module>
.bookshelf {
	width: 100%;
	background-color: blue;
}
</style>

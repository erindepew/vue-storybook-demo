<template>
	<div :class="$style.book">
	{{active}}
	</div>
</template>

<script>
export default {
  name: 'book',
  props: {
  active: {
  type: Boolean,
  required: true,
  }
  }
}
</script>


<style module >
.book {
width: 100px;
height: 200px;
background-color: green;
}
</style>

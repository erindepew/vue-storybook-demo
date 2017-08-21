<template>
	<div :class="[{ inactive: !active}, $style.book ]">
		<img :src="imageUrl" :class="$style.bookImage"/>
		<h2 :class="$style.title" >{{title}}</h2>
		<p :class="$style.author" >{{author}}</p>
	</div>
</template>

<script>
export default {
  name: 'Book',
  props: {
		active: {
			type: Boolean,
		},
		title: {
			type: String,
		},
		author: {
			type: String,
		},
		image: {
			type: String,
			default: '',
		}
  },
	computed: {
  	imageUrl() {
			return require('./../assets/' + this.image);
		}
	},
}
</script>


<style module>
  .book {
    width: 195px;
    height: 300px;
    display: inline-block;
    margin: 0 20px;
    text-align: left;
  }

.bookImage {
	object-fit: cover;
  width: 100%;
  height: 100%;
}

.title {
	font-family: "Helvetica Neue", Helvetica;
	font-size: 16px;
	width: 100%;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
  color: #2a2a2a;
  margin: 10px 0 0;
}

.author {
	font-family: "Helvetica Neue", Helvetica;
	font-size: 13px;
  margin-top: 5px;
  color: #2a2a2a;
}
</style>


<style>

  .inactive {
    opacity: 0.5;
  }

</style>

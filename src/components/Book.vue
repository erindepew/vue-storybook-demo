<template>
	<div :class="$style.book">
		<img :src="imageUrl" :class="$style.bookImage" />
		<h2 :class="$style.title" >{{title}}</h2>
		<p :class="$style.author" >{{author}}</p>
	</div>
</template>

<script>
export default {
  name: 'book',
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


<style module >
.book {
	width: 130px;
	height: 200px;
	display: inline-block;
	float: left;
	margin: 10px 20px;
}

.bookImage {
	width: 140px;
	height: 200px;
	object-fit: cover;
}

.title {
	font-family: "Helvetica Neue", Helvetica;
	font-size: 14px;
	width: 100%;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}

.author {
	font-family: "Helvetica Neue", Helvetica;
	font-size: 12px;
}
</style>

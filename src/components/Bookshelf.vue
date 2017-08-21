<template>
	<div :class="[{ active: active}, $style.bookshelf ]">
    <h2 :class="$style.bookshelfName" >{{name}}</h2>
			<Book v-for="(book, index) in books"
				:title="book.title"
				:author="book.author"
				:image="book.image"
				:active="book.active"
				:key="index" />
			<h3 :class="$style.emptyState" v-if="empty"> Looks like your shelf is empty! </h3>
	</div>
</template>

<script>
import Book from './Book.vue'
export default {
  name: 'Bookshelf',
  components: {
    Book
  },
  props: {
    books: {
      type: Array,
    },
    name: {
      type: String,
    },
    active: {
      type: Boolean,
    }
  },
	computed: {
  	empty() {
  		debugger;
  		return this.books.length == 0;
		}

	}
}
</script>

<style module>
.bookshelf {
	background-color: #f8f6f5;
	overflow: auto;
	height: 415px;
	margin: 30px;
	padding: 30px 10px 20px;
	border-radius: 10px;
	text-align: center;
}

.bookshelfName {
  color: #76a7a2;
  text-align: left;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 20px 20px;
  font-family: "Helvetica-Neue", Helvetica, sans-serif;

}

.emptyState {
	font-family: "Helvetica Neue", Helvetica, sans-serif;
	font-size: 24px;
	width: 100%;
	color: #999;
	margin-top: 100px;
}
</style>

<style>
  .active {
  border: 2px solid #accac7;
}
</style>

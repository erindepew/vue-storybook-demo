<template>
	<div :class="$style.bookshelf">
			<Book v-for="(book, index) in books"
				:title="book.title"
				:author="book.author"
				:image="book.image"
				:active="book.active"
				:key="index" />
	</div>
</template>

<script>
import Book from '@/components/Book'
export default {
  name: 'bookshelf',
  components: {
    Book
  },
  props: {
    books: {
      type: Array,
    }
  },
}
</script>

<style module>
.bookshelf {
	background-color: #f8f6f5;
	overflow: auto;
	height: 290px;
	margin: 30px;
	padding: 30px 10px 20px;
	border-radius: 10px;
	text-align: center;
}
</style>

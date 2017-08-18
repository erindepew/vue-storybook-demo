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
	width: 100%;
	background-color: blue;
}
</style>

<template>
  <div :class="$style.library">
    <Bookshelf  v-for="(books, index) in readingList" :books="books.books" :key="index" />
  </div>
</template>

<script>
import Bookshelf from '@/components/Bookshelf'
export default {
  name: 'library',
  components: {
    Bookshelf
  },
  data () {
    return {
      readingList: [
        {
          name: 'Sci-fi',
          active: true,
          books: [
            {
            title: 'Seveneves',
            author: 'Neil Stephenson',
            image: 'Seveneves.jpg',
            active: true
          },
            {
              title: 'The Martian',
              author: 'Andy Weir',
              image: 'The_Martian.jpg',
              active: true
            },
            {
              title: 'The Three Body Problem',
              author: 'Liu Cixin',
              image: 'Three_Body_Problem.jpg',
              active: true
            }
          ]
        }
      ]
    }
  }
}
</script>

<style module>
  .library {
    background-color: #e2d8d9;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>



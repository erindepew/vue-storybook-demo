<template>
  <div :class="$style.library">
    <Bookshelf  v-for="(books, index) in readingList" :books="books.books" :name="books.name" :active="books.active" :key="index" />
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
          name: 'Science-fiction',
          active: true,
          books: [
            {
            title: 'Seveneves',
            author: 'Neil Stephenson',
            image: 'Seveneves.jpg',
            active: false
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
        },
        {
          name: 'Non-fiction',
          active: false,
          books: [
            {
              title: 'Making Ideas Happen',
              author: 'Scott Belsky',
              image: 'Making_Ideas_Happen.jpg',
              active: true
            },
            {
              title: 'The Lost City of Z',
              author: 'David Grann',
              image: 'Lost_City_Z.jpg',
              active: true
            },
            {
              title: 'The Alphabet and the Algorithm',
              author: 'Mario Carpo',
              image: 'Alphabet_Algorithm.jpg',
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
    overflow: auto;
  }
</style>



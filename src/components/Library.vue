<template>
  <div :class="$style.library">
    <Bookshelf  v-for="(books, index) in readingList" :books="books.books" :name="books.name" :active="books.active" :key="index" />
  </div>
</template>

<script>
import Bookshelf from '@/components/Bookshelf'
import { mockData } from '@/mockData';
export default {
  name: 'library',
  components: {
    Bookshelf
  },
  data () {
    debugger;
    return {
      readingList: mockData,
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



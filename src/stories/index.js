import { storiesOf} from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// Mock Data
import { mockData } from '../mockData';

// Components
import Book from '../components/Book.vue';
import Bookshelf from '../components/Bookshelf.vue';

// Stories: Book Component

storiesOf('Book', module)
  .add('active', () => ({
    components: { Book },
    data: () => {
      return {
        bookData: mockData[0].books[0],
      };
    },
    template:  '<Book :title="bookData.title" :author="bookData.author" :image="bookData.image" :active="true"/>',
  }));

// Stories: Bookshelf Component

storiesOf('Bookshelf', module)
  .add('default', () => ({
    components: { Bookshelf},
    data: () => {
      debugger;
      return {
        bookshelfData: mockData[0],
      };
    },
    template: '<Bookshelf :books="bookshelfData.books" :name="bookshelfData.name" :active="false" />',
  }))
  .add('new', () => ({
    components: { Bookshelf},
    data: () => {
      debugger;
      return {
        bookshelfData: mockData[0],
      };
    },
    template: '<Bookshelf :books="bookshelfData.books" :name="bookshelfData.name" :active="true" />',
  }))
  .add('empty', () => ({
    components: { Bookshelf},
    data: () => {
      debugger;
      return {
        bookshelfData: mockData[0],
      };
    },
    template: '<Bookshelf :books="[]" :name="bookshelfData.name" :active="false" />',
  }));

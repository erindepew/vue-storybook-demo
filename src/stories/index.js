/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Book from './../components/Book.vue';

import Bookshelf from './../components/Bookshelf.vue';

storiesOf('Book', module)
  .add('active', () => ({
    components: { Book },
    template: '<book :active="true" />',
  }))
  .add('inactive', () => ({
    components: { Book },
    template: '<book :active="false" />',
  }));


  storiesOf('Bookshelf', module)
  .add('default', () => ({
    components: { Bookshelf, Book },
    template: '<bookshelf> <book :active="true"/> <book :active="true"/> </bookshelf>',
  }))
  .add('default with inactive books', () => ({
    components: { Bookshelf, Book },
    template: '<bookshelf> <book :active="true"/> <book :active="true"/> </bookshelf>',
  }))
  .add('empty', () => ({
    components: { Bookshelf, Book },
    template: '<bookshelf> </bookshelf>',
  }));

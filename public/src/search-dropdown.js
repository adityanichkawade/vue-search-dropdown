define(function () {
  'use strict';
  return {
    emits: ['onSearch'],
    props: {
      items: {
        type: Array,
        default: []
      }
    },
    template: `
        <div class="search">
            <input @input="$emit('onSearch', $event.target.value)" class="search__input" type="text" placeholder="Search text..."/>
            <ul v-if="items.length" class="search__dropdown">
              <li v-for="item in items" :key="item.id" role="button" class="search__dropdownitem">{{item.text}}</li>
            </ul>
        </div>`
  }
}); 
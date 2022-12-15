define(function () {
    'use strict';

    const useSearch = (data) => {
        const searchText = Vue.ref('');

        const search = (text) => {
            searchText.value = text;
        }

        const searchResult = Vue.computed(() => searchText.value !== '' ? data.filter(item => item.text.toLowerCase().startsWith(searchText.value.toLowerCase())) : data);

        return {
            search,
            searchResult
        }
    }
    return useSearch;
}); 
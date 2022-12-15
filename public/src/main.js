
require([
    "./search-dropdown",
    './useSearch',
    './countries'
], function (searchdropdown, useSearch, countries) {
    const app = Vue.createApp({
        setup() {
            const { search, searchResult } = useSearch(countries);
            const onSearch = (searchText) => search(searchText);

            return {
                items: searchResult,
                onSearch
            }
        },
        components: {
            ASearchDropdown: searchdropdown
        }
    });

    app.mount('#app');
})
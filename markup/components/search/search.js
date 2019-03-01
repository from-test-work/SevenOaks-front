import $ from 'jquery';
export default {
    init() {
        $( '.search__wrap' ).click((e) => {
            e.preventDefault();
            e.stopPropagation();

            const $target = $(e.target);
            const $search = $target.closest('.search__btn');

            if ($search.length) {
                $( '.searchList' ).toggleClass( 'active' );
                $( '.search__box' ).toggleClass( 'search__box-active' );
            }

        });
    }
};


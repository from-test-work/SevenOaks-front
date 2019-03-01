'use strict';
import $ from 'jquery';
import polyfills from './libraries/polyfills';

import Header from '../../components/header/header';
import Search from '../../components/search/search';

$(() => {
    polyfills.init();
    Header.init();
    Search.init();
});


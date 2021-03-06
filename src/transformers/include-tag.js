'use strict';

exports.transform = function(el) {
    let templateAttr = el.getAttribute('template');
    let templateDataAttr = el.getAttribute('template-data');
    el.removeAttribute('template');
    el.removeAttribute('template-data');

    el.argument = templateAttr.value.toString();

    if (templateDataAttr) {
        el.argument += ', ' + templateDataAttr.value;
    }
};
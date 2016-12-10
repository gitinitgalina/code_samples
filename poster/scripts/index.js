/**
 * Created by i on 01.09.16.
 */


$(function () {
    $('.chips').material_chip();
    $('.chips-initial').material_chip({
        data: [{
            tag: 'Apple'
        }, {
            tag: 'Microsoft'
        }, {
            tag: 'Google'
        }]
    });
    $('.chips-placeholder').material_chip({
        placeholder: 'Enter a tag',
        secondaryPlaceholder: '+Tag'

    });
    // $(".dropdown-button").dropdown();я написала
})

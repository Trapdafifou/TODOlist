// /**
//  * Created by Thib on 09/05/2016.
//  */

'use strict';


var template = function(value){
    return `
<li>
    <div class="view">
    <input type="checkbox" class="toggle">
    <label>${value}</label>
    <button class="destroy"></button>
    </div>
</li>`;
}


$(function () {
    $('#todo-list').delegate('.toggle', 'click', function (event) {
            $(event.target)
                .closest('li')
                .toggleClass('completed');
        })
        .delegate('.destroy', 'click', function (event) {
            $(event.target).closest('li').remove();
        })
        .delegate('label', 'dblclick', function (event) {
         $(event.target)
                .closest('li')
                .toggleClass('editing')
                .find('.edit')
                .val(event.target.innerHTML)
                .focus()
             .delegate('editing', 'keyup', function (event) {
                    if (event.keyCode === 13) {
                        $(event.target.value)
                            .closest('li')
                            .text(event.target.value)
                            .removeClass('editing');
                    }
                });

        });

    $('#new-todo').on('keyup', function (event) {
        if (event.keyCode === 13) {
            var html = template(event.target.value);
            event.target.value = '';
            $('#todo-list').append(html);
        }
    })
});
/**
 * Created by Margaret on 2/22/2016.
 */
$('document').ready(function() {
    // http://stackoverflow.com/questions/23289944/jquery-event-handler-for-input-type-text
    $('#btnAddToList').on('click',function (){
        addItem();
    });

});

function addItem () {
    var statement = $('input').val();
    $('input').val('');

    var theList = $('#listTitle');
    var $newListItem =$('<li class="listElement"></li>');
    $newListItem.append(statement);
    $newListItem.addClass('notDone');
    theList.append($newListItem);
    $('.listElement').on('click', function() {
        $(this).toggleClass('done notDone');
    });
}
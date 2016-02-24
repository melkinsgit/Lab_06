/**
 * Created by Margaret on 2/22/2016.
 */
$('document').ready(function() {
    // got some help with the input field from (I think, though I'm not really sure what I got from this link; it was days ago!): http://stackoverflow.com/questions/23289944/jquery-event-handler-for-input-type-text
    $('#btnAddToList').on('click',function (){
        addItem();
    });
    //$('#removeDone').on('click', removeDoneItems);
    $('#removeDone').on('click', tableDoneItems);

});

function addItem () {
    var statement = $('input').val();
    $('input').val('');

    if (statement != '') {
        var theList = $('#listTitle');
        var $newListItem = $('<li class="listElement"></li>');
        $newListItem.append(statement);
        $newListItem.addClass('notDone');
        theList.append($newListItem);

        // once I've got a new list element, appended the text, given it a start state of notDone by adding that class, and then appended that whole li element to the ul, I want to add the function to it
        $('.listElement:last-child').on('click', function () {
            $(this).toggleClass('done notDone');
        });
    }
    else {
        alert('Please type a ToDo List item in the box.')
    }
}

function removeDoneItems () {
    $('.done').remove();
}

function tableDoneItems() {

    var $doneList = $('.done');

    var $tableHead = $('#tableHead');
    for (var i = 0; i < $doneList.length; i++){
        var $newTableRow = $('<tr></tr>');
        var $newTableToDoData = $('<td></td>');
        $newTableToDoData.text($doneList[i].innerHTML);
        var $newTableDataData = $('<td></td>');
        $newTableDataData.text(new Date($.now()));
        $newTableRow.append($newTableToDoData);
        $newTableRow.append($newTableDataData);
        $tableHead.append($newTableRow);
    }

    $doneList.fadeOut(500);

}


$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideDown("slow");
    });
});
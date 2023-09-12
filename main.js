$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('form').on('submit', function(e){
    e.preventDefault();
    const novaTarefa = $('#tarefa').val();
    const novoItem = $('<li></li>');
    $(`<a href="#">${novaTarefa}</a>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $('#tarefa').val('');
    $(novoItem).click(function() {
        $(this).css('text-decoration', 'line-through');
    })
})
})
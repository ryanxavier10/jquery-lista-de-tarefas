$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoNovaLista = $('#endereco-lista-nova').val();
        const novoItem = $('<li></li>')
        $(`<li>${enderecoNovaLista}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#endereco-lista-nova').val(' ');
    })

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
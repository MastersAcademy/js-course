(function() {
    var modal = document.getElementById('myModal');
    var closeContact = document.getElementById('close_contact_button');
    closeContact.onclick = function() {
        modal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
    var okButton = document.getElementById('submit');
    var input = document.getElementById('task');
    
    $(".table").on('dblclick', 'tr', function() {
        input.value = $(this.querySelector('span')).html();
        console.log($(this.querySelector('span')).html());
        modal.style.display = "block";
        context = this;
        $("#submit").click(function() {
            $(context.querySelector('span')).html(input.value);
            modal.style.display = "none";
        });
    });

    $('.counter').html($('[style ="text-decoration: line-through"]').length + '/' + $('th:not(#head-table)').length);
})();
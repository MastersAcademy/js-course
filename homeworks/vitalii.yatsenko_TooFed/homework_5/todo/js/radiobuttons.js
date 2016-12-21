(function() {

    $('[data-not-done]').click(function(){
        $('[style ="text-decoration: line-through"]').parent().attr('hidden', true);
        $('th:not([style ="text-decoration: line-through"])').parent().attr('hidden', false);
    });

    $('[data-done]').click(function(){
        $('[style ="text-decoration: line-through"]').parent().attr('hidden', false);
        $('th:not([style ="text-decoration: line-through"], #head-table)').parent().attr('hidden', true);
    });

    $('[data-all]').click(function(){
        $('tr').attr('hidden', false);
    });
})();
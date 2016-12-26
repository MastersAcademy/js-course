(function() {
    /*var modal = document.getElementById('myModal');
    var closePopup = document.getElementById('close_popup');*/
    
    var Popup = {
        
        modal : document.getElementById('myModal'),
        closePopup : document.getElementById('close_popup'),
        okButton : document.getElementById('submit'),
        input : document.getElementById('task'),
        $table : $('.table'),

        listenEvents : function (){
            $(this.closePopup).click(this.close.bind(this));
            $(this.$table).on('dblclick', 'tr', this.dblClickOpen.bind(this));
            //window.onclick(this.closeModal.bind(this));
        },

        close : function() {
            this.modal.style.display = "none";
        },

        closeModal : function(event) {
            if (event.target == modal) {
                this.modal.style.display = "none";
            }
        },

        dblClickOpen : function(event) {
            this.input.value = $(event.target).html();
            console.log($(event.target).html());
            this.modal.style.display = "block";
            context = event.target;
            
            var submit = function () {
                $(context).html(this.input.value);
                this.modal.style.display = "none";
                console.log(this);
            }

            $("#submit").click(submit.bind(this));

        }

        
    }
    
    window.Popup = Popup;
    Popup.listenEvents();
    //$('.counter').html($('[style ="text-decoration: line-through"]').length + '/' + $('th:not(#head-table)').length);
    // closePopup.onclick = function() {
    //     modal.style.display = "none";
    // };
    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // };
    
    // /*var okButton = document.getElementById('submit');
    // var input = document.getElementById('task');*/
    
    // $(".table").on('dblclick', 'tr', function() {
    //     input.value = $(this.querySelector('span')).html();
    //     console.log($(this.querySelector('span')).html());
    //     modal.style.display = "block";
    //     context = this;
    //     $("#submit").click(function() {
    //         $(context.querySelector('span')).html(input.value);
    //         modal.style.display = "none";
    //     });
    // });


})();
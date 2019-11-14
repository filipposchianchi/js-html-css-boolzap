$( document ).ready(function() {

    //agganciamo al click sul bottone la funzione di callbnack
    $(".invio").click(function(){
        var messaggioInviato = invioMessaggio();

        if(messaggioInviato === true) {
            setTimeout( messaggioPc, 1000);
        }
    })

    //invio messaggio al click del pulsante invio
    $(window).on({
        keyup: function (k) {            
            if (k.keyCode == "13") {
                var messaggioInviato = invioMessaggio();
                if(messaggioInviato === true) {
                    setTimeout( messaggioPc, 1000);
                }
            }
        }
    })


    /* cambio di icon quando clicco sul input */
    $(".messaggio").click(function (){
        $(".vocale").css("display", "none");
        $(".send").css("display", "inline-block")
    })

    /* ritorno all'icon del vocale se clicco fuori dall input*/
    $('body').click(function(evt){    
        if(evt.target.id == "messaggio")
           return; 
        var messaggio = $(".messaggio").val();
        if(messaggio.length == 0) {
            $(".vocale").css("display", "inline-block");
            $(".send").css("display", "none");
        } else {
            $(".vocale").css("display", "none");
            $(".send").css("display", "inline-block")

        }
    });

    /*evento per cercare in conversazioni recenti */
    $(".search").keyup(function() {
        var searchText = $(this).val().toLowerCase();
        $(".single-chat").each(function() {
            var elemento = $(this).find(".nomeuser").text();
            if($(this).find(".nomeuser").text().toLowerCase().includes(searchText)) {
              $(this).show();
            } else {
             $(this).hide();
            }
         });
    });


    //click sulle varie conversazioni
    $(".single-chat").click( function () {
        var numeroChat = $(this).attr("data-ref");
        $(".single-chat").removeClass("selected-chat");
        $(".my-chat").removeClass("active");
        $(this).addClass("selected-chat");
        $(".my-chat[data-ref=" + numeroChat + "]").addClass("active");
    })



    /*click sul messaggio per far comparire il dropdown menu */

    $(document).on( "click", ".msgsent", function() {
        $(this).find(".dropdown-menu").toggle();
        $(this).find(".dropdown-menu .dropdown-content .elimina-msg").click( function () {
            $(this).parents(".msgsent").removeClass("msgcomputer");
            $(this).parents(".msgsent").addClass("cancella-msg");
        })
    });


});
   

 
 function invioMessaggio() {

    //ci salviamo il valore dell'input inserito dall'utente
    var messaggio = $(".messaggio").val();
    if(messaggio.length != 0) {

        // cloniamo (facciamo una copia) del div con classe "msgsent" che sta dentro un div con ID "template"
        var elementmsg = $("#template .msgsent").clone();

        // modifica questa copia di "msgsent" aggiungendogli il testo del messaggio
        elementmsg.find(".testo").text(messaggio);
        
        // appendiamo una copia con testo valorizzato del div "msgsent"
        $(".container-conversazione .active").append(elementmsg);

        // ripuliamo il contenuto dell'input, per UX
        $(".messaggio").val("");
        return true;
    } else {
        return false
    }

    
};

function messaggioPc() {

    var messaggio = "ok";

    var elementmsg = $("#template .msgsent").clone();

    elementmsg.find(".testo").text(messaggio);

    elementmsg.addClass("msgcomputer")

    $(".container-conversazione .active").append(elementmsg);
};




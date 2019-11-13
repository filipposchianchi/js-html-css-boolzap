$( document ).ready(function() {

    //agganciamo al click sul bottone la funzione di callbnack
    $(".invio").click(function(){
        invioMessaggio();
    })

    //invio messaggio al click del pulsante invio
    $(window).on({
        keyup: function (k) {            
            if (k.keyCode == "13") {
                invioMessaggio();
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

});
   

 
 function invioMessaggio() {

    //ci salviamo il valore dell'input inserito dall'utente
    var messaggio = $(".messaggio").val();
    console.log(messaggio);
    if(messaggio.length != 0) {

        // cloniamo (facciamo una copia) del div con classe "msgsent" che sta dentro un div con ID "template"
        var elmentmsg = $("#template .msgsent").clone();

        // modifica questa copia di "msgsent" aggiungendogli il testo del messaggio
        elmentmsg.find(".testo").text(messaggio);
        
        // appendiamo una copia con testo valorizzato del div "msgsent"
        $("#conversazione").append(elmentmsg);

        // ripuliamo il contenuto dell'input, per UX
        $(".messaggio").val("");
    } else {
        return;
    }
};


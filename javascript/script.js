$( document ).ready(function() {

    //agganciamo al click sul bottone la funzione di callbnack
    $(".invio").click(function(){

        //ci salviamo il valore dell'input inserito dall'utente
        var messaggio = $(".messaggio").val();
        console.log(messaggio);
        
        // cloniamo (facciamo una copia) del div con classe "msgsent" che sta dentro un div con ID "template"
        var elmentmsg = $("#template .msgsent").clone();


        // modifica questa copia di "msgsent" aggiungendogli il testo del messaggio
        elmentmsg.find(".testo").text(messaggio);
        
        // appendiamo una copia con testo valorizzato del div "msgsent"
        $("#container").append(elmentmsg);

        // ripuliamo il contenuto dell'input, per UX
        $(".messaggio").val("");
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
        $(".vocale").css("display", "inline-block");
        $(".send").css("display", "none")
 
 });

    

});

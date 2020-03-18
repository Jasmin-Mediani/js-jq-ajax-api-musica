$(document).ready(function () {



    ////////////////// HANDLEBARS IN AJAX //////////////////

    var source = $("#template-card").html();
    var templateCard = Handlebars.compile(source); //MEMO: è #template-card svuotato dei campi personalizzabili


    $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/array/music",
        method: "GET",
        success: function (datiInArrivo) {
            var tuttiGliAlbum = datiInArrivo.response; //è un array di oggetti.  Il singolo album (l'esimo) sarà i. 

            for (var i = 0; i < tuttiGliAlbum.length; i++) {
                var singoloAlbum = tuttiGliAlbum[i];
                var infoCard = {
                    immagine: singoloAlbum.poster,
                    titolo: singoloAlbum.title,
                    autore: singoloAlbum.author,
                    genere: singoloAlbum.genre,
                    anno: singoloAlbum.year,
                }

                var cardCompilata = templateCard(infoCard);
                $(".container-albums").append(cardCompilata);

            }

        },

        error: function () {
            alert("Errore!");
        }

    });



    //////////////// SCELTA GENERE MUSICALE /////////////////



    $(".scegli-genere").change(function () {
        var genereSelezionato = $(this).val();
        if (genereSelezionato == "") {
            $(".card").show();
        } else {

            $(".card").each(function () {

                if ($(this).data("genere").toLowerCase() == genereSelezionato.toLowerCase()) {
                    $(this).show();
                } else {
                    $(this).hide();
                }

            });

        }

    })





});


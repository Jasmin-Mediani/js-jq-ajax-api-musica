$(document).ready(function () {


    var source = $("#template-card").html();
    var templateCard = Handlebars.compile(source); //MEMO: è #template-card svuotato dei campi personalizzabili


    $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/array/music",
        method: "GET",
        success: function (datiInarrivo) {
            var tuttiGliAlbum = datiInarrivo.response; //è un array di oggetti.  Il singolo album (l'esimo) sarà i. 

            for (i = 0; i < tuttiGliAlbum.length; i++) {
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




});


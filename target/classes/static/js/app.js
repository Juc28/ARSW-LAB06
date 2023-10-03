Blueprint = (function(){
    var Author = $("#AuthorInput").val(); //El nombre del autor actual.
    var AuthorNew;
    var blueprints; //Una lista de los planes del autor.
    var UserPoints;
    var plano;
    var bps2; // Un plano específico en formato de objeto del autor especificado.
    var planoM;
    var bp; //Un plano específico en formato de objeto del autor especificado.
    var canvas;
    var canvasM;
    var ctx;
    var ID; // Nombre del plano
    var bps; //
    var apiMock = apimock;
    /**
     * Funcion callback. Se necesita como parametro para usar las funciones de apimock
     * @param {Array} list
     */
    var fun=function(list){
        blueprints = list;
    }

    /**
     * Función para actualizar la visualización de la puntuación HTML de acuerdo con.
     * todos los puntos combinados de los planes del autor.
     * */
    function updateTotalUPoints()  {
        // Obtenemos los puntos de todos los planos del autor.
        const pointsM = planoM.map((plano) => plano.puntos);
        // Calcula el total de puntos.
        const points = pointsM.reduce((total, sum) => total + sum, 0);
        // Actualiza la visualización de la puntuación HTML.
        $("#totalPoints").html(points);
    }

    /**
     * Función que se crea para sumar dos valores.
     * @param {number} total
     * @param {number} sum
     * @returns
     */
    function getSum(total,sum){
        return total + sum;
    }

    function updatePlanos(){
        apiMock.getBlueprintsByAuthor($("#AuthorInput").val(),fun);
        bps = blueprints;
        bps2 = bps.map(function(bp){
            plano = {nombre:bp.name, puntos: bp.points.length};
            return plano;
        });
        planoM = bps2;
        $("table tbody").empty();
        BlueprintTable = bps2.map(function(plano){
            const columna = `<tr>
                                        <td align="center" id="${plano.nombre}">${plano.nombre}</td>
                                        <td align="center">${plano.puntos}</td>
                                      
                                    </tr>`;

            $("table tbody").append(columna);
            return columna;
        });
        updateTotalUPoints();

    }
    return{
       updatePlanos: updatePlanos,
    };

})();
Blueprint;
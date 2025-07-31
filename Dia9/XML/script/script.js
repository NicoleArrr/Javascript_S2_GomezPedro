// Consumo de API 
// mediante XMLHttpRequest

//Modularizar el consumo de la api
function buscarPersonaje() {
    document.getElementById("resultados").innerHTML=``;
    //const nombreUsar= prompt("Ingresar el nombre del personaje a buscar:");
    const nombreUsar = document.getElementById("nombreInput").value.trim();
    console.log(nombreUsar);
    const xhr = new XMLHttpRequest();//La importación del XML
    const url = `https://rickandmortyapi.com/api/character?name=${nombreUsar}`;//Acento Inverso ```
    console.log(url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {

            console.log("Cargando...");
        }
        else if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                /*        <div class="card">
            <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="">
            <h3>Morty</h3>
            <p><strong>Estado:</strong>Vivo</p>
            <p><strong>Especie:</strong>Humana</p>
        </div> */
                const daticos = JSON.parse(xhr.responseText);
                if (daticos.results && daticos.results.length > 0) {
                    for (let i = 0; i < daticos.results.length; i++) {
                        let division = document.getElementById("resultados");
                        division.innerHTML += `
                        <div class="card">
            <img src="${daticos["results"][i]["image"]}" alt="">
            <h3>${daticos["results"][i]["name"]}</h3>
            <p><strong>Status:</strong>${daticos["results"][i]["status"]}</p>
            <p><strong>Specie:</strong>${daticos["results"][i]["species"]}</p>
        </div>
                        `
                        console.log(daticos["results"][i]["name"]);
                    }
                }

            }
            catch (err) {
                console.log(err.message); //Si algo malo pasa simplemente imprima el error
            }
        }
    };
    xhr.send();
}


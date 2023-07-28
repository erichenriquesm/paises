function buscaPaises(param) {
    var url = "https://restcountries.com/v3.1/all";

    var busca = document.getElementById('busca').value;
    if(param && busca){
        url = "https://restcountries.com/v3.1/name/"+busca
    }

    fetch(url).then(data => {
        return data.json();
    }).then(paises => {
        console.log(paises);

        var html_final = '';

        for (let i = 0; i < paises.length; i++) {
            //aqui a gente tem pais por pais
            const pais = paises[i];

            //aqui utilizamos crase ``
            var html_base = `
            <div class="col-4">
                <div class="card shadow mb-4" style="width: 18rem;">
                    <img style="height: 180px; object-fit: cover;" src="${pais.flags.png}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${pais.name.common}</h5>
                        <p class="card-text">Regiao: ${pais.region}</p>
                    </div>
                </div>
            </div>
            `;

            html_final = html_final + html_base;            
        }

        document.getElementById('linha').innerHTML = html_final;
    })
}

buscaPaises();
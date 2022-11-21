window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    let logoDH = document.querySelector('.logoDH')


/*     let modo = confirm('Desea modo oscuro');
    if(modo){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    } */

    logoDH.addEventListener("mouseover", () => {
        body.classList.toggle('fondoMoviesList');
        body.style.backgroundColor = '#7f7f7f'

})
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

}
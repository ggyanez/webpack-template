import '../css/componentes.css';

export const saludar = (nombre) => {
    // console.log('Creando etiqueta h1, en el HTML');

    const mainContainer = document.querySelector('#main-container');
    let miNombre = document.createElement('h3');
    miNombre.innerText = `~ ${nombre}`;
    miNombre.style.color = 'indigo';
    mainContainer.append(miNombre);
}
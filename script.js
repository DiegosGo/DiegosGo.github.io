
  let escala = 1;
  

  function cambiarTamaño() {
    const imagen = document.getElementById("foto-perfil");
    
    escala = escala === 1 ? 1.2 : 1;
    
    setTimeout(() => {
      imagen.style.transform = `scale(${escala})`;
    }, 500); 

    imagen.style.width= "250px";
    
  }

  function hacerFoco() {
      const seccion = document.getElementById("Perfil");
    window.scrollTo({
      top: seccion.scrollWidth,
      behavior: "smooth"
    });
    seccion.style.backgroundColor ="#333";
    seccion.style.color = "#fff";    

    setTimeout(() => {
      seccion.style.backgroundColor ="#f0f0f0bb";
      seccion.style.color = "#000";  
    }, 1500); 
  }

  function hacerFoco2() {
    const seccion = document.getElementById("Proyectos");
    window.scrollTo({
      top: 1000,
      behavior: "smooth"
    });
  seccion.style.backgroundColor ="#333";
  seccion.style.color = "#fff";    

  setTimeout(() => {
    seccion.style.backgroundColor ="#f0f0f0bb";
    seccion.style.color = "#000";  
  }, 1500); 
}

function hacerFoco3() {
  const seccion = document.getElementById("Contacto");
window.scrollTo({
  top: 200,
  behavior: "smooth"
});
seccion.style.backgroundColor ="#333";
seccion.style.color = "#fff";    

setTimeout(() => {
  seccion.style.backgroundColor ="#f0f0f0bb";
  seccion.style.color = "#000";  
}, 1500); 
}


  
  
  
  
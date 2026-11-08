
/* =====================================
   LASABRINA — PORTFOLIO
   PROYECTOS
===================================== */

const proyectos = [
  {
    titulo: "Malamente",
    categoria: "diseno",
    categoriaTexto: "Diseño gráfico · Campaña musical",
    subtitulo: "Rosalía · Campaña visual",
    portada: "imagenes/15-Malamente-campa-a-musical.png",
    imagenes: [
      "imagenes/15-Malamente-campa-a-musical.png",
      "imagenes/16-Piso-mojado.png"
    ],
    descripcion: "Una propuesta de comunicación visual inspirada en Malamente, de Rosalía. La campaña explora el lenguaje gráfico de la canción a través de afiches y aplicaciones en distintos soportes.",
    enlace: ""
  },

  {
    titulo: "Amor Fiado",
    categoria: "diseno",
    categoriaTexto: "Merchandising · Diseño gráfico",
    subtitulo: "Zeballos · Colección de gorras",
    portada: "imagenes/23-Zeballos-de-gira.png",
    imagenes: [
      "imagenes/23-Zeballos-de-gira.png",
      "imagenes/24-Zeballos-en-Alemania.png",
      "imagenes/25-Zeballos-en-Espa-a.png",
      "imagenes/26-Zeballos-en-Francia.png",
      "imagenes/27-Zeballos-en-Italia.png",
      "imagenes/28-Zeballos-en-Reino-Unido.png"
    ],
    descripcion: "Una colección de cinco gorras pensada para la gira de Zeballos. El diseño combina rayas inspiradas en la escarapela uruguaya, parches de estética cuero y distintas variantes vinculadas a los países de la gira.",
    enlace: ""
  },

  {
    titulo: "Azuquita pa’l café",
    categoria: "diseno",
    categoriaTexto: "Diseño discográfico",
    subtitulo: "Conjunto Casino · Portada y contratapa",
    portada: "imagenes/08-Dise-o-portada-vinilo.png",
    imagenes: [
      "imagenes/08-Dise-o-portada-vinilo.png",
      "imagenes/09-Dorso-vinilo.png"
    ],
    descripcion: "Diseño de portada y contratapa para Azuquita pa’l café, de Conjunto Casino. Una propuesta que combina referencias vintage, fotografía y recursos tipográficos.",
    enlace: ""
  },

  {
    titulo: "¿Y si...?",
    categoria: "diseno",
    categoriaTexto: "Ilustración",
    subtitulo: "Exploración gráfica e ilustración",
    portada: "imagenes/19-silvestre-y-la-naranja.png",
    imagenes: [
      "imagenes/19-silvestre-y-la-naranja.png",
      "imagenes/20-syln-1.png",
      "imagenes/21-syln-2.png",
      "imagenes/22-syln-3.png"
    ],
    descripcion: "Una serie de ilustraciones que explora situaciones inesperadas a través del humor, el color y la experimentación con las formas.",
    enlace: ""
  },

  {
    titulo: "Sin flash, porfa.",
    categoria: "fotografia",
    categoriaTexto: "Fotografía",
    subtitulo: "Serie fotográfica",
    portada: "imagenes/07-aleatorias.jpeg",
    imagenes: [
      "imagenes/07-aleatorias.jpeg",
      "imagenes/01-aleatorias-2.jpeg",
      "imagenes/02-aleatorias-3.jpeg",
      "imagenes/03-aleatorias-4.jpeg",
      "imagenes/04-aleatorias-5.jpeg",
      "imagenes/05-aleatorias-6.jpeg",
      "imagenes/06-aleatorias-7.jpeg"
    ],
    descripcion: "Una selección de fotografías personales donde la composición, la mirada y los detalles cotidianos son protagonistas.",
    enlace: ""
  },

  {
    titulo: "Los Robles",
    categoria: "fotografia",
    categoriaTexto: "Fotografía deportiva",
    subtitulo: "Rugby · Fotografía de acción",
    portada: "imagenes/11-Los-robles-1.jpeg",
    imagenes: [
      "imagenes/11-Los-robles-1.jpeg",
      "imagenes/12-Los-robles-2.jpeg",
      "imagenes/13-Los-robles-3.jpeg",
      "imagenes/14-Los-robles-4.jpeg"
    ],
    descripcion: "Una serie de fotografías deportivas de rugby, enfocada en capturar el movimiento, la intensidad y los momentos del juego.",
    enlace: ""
  },

  {
    titulo: "SABIÁ",
    categoria: "web",
    categoriaTexto: "Diseño y desarrollo web",
    subtitulo: "Tienda online · E-commerce",
    portada: "imagenes/17-Sabi-portada.png",
    imagenes: [
      "imagenes/17-Sabi-portada.png",
      "imagenes/18-SABI-.png"
    ],
    descripcion: "Diseño y desarrollo de una tienda online de productos para heladerías y emprendimientos. La identidad visual utiliza colores intensos y una estética veraniega, con una experiencia de compra sencilla.",
    enlace: "https://sabia-tienda.onrender.com/"
  },

  {
    titulo: "Feria Online",
    categoria: "web",
    categoriaTexto: "Diseño y desarrollo web",
    subtitulo: "Tienda online · Shopify",
    portada: "imagenes/10-Feria-online.png",
    imagenes: [
      "imagenes/10-Feria-online.png"
    ],
    descripcion: "Diseño y configuración de una tienda online en Shopify, con una identidad visual cercana, una navegación sencilla y una experiencia de compra pensada para facilitar el acceso a los productos.",
    enlace: "https://feriaonlineuruguay.myshopify.com/"
  }
];


/* =====================================
   ELEMENTOS DEL HTML
===================================== */

const inicio = document.getElementById("inicio");
const detalle = document.getElementById("detalle-proyecto");
const grilla = document.getElementById("grilla-proyectos");
const botonesFiltro = document.querySelectorAll(".filtro");

let proyectoActual = 0;


/* =====================================
   MOSTRAR PROYECTOS
===================================== */

function mostrarProyectos(filtro = "todos") {

  grilla.innerHTML = "";

  proyectos.forEach((proyecto, indice) => {

    if (
      filtro !== "todos" &&
      proyecto.categoria !== filtro
    ) {
      return;
    }

    const tarjeta = document.createElement("article");

    tarjeta.className = "tarjeta-proyecto";

    tarjeta.innerHTML = `
      <div class="tarjeta-imagen">
        <img
          src="${proyecto.portada}"
          alt="${proyecto.titulo}"
          loading="lazy"
        >
      </div>

      <div class="tarjeta-info">
        <div>
          <h3>${proyecto.titulo}</h3>
          <p>${proyecto.categoriaTexto}</p>
        </div>

        <span class="tarjeta-numero">
          ${String(indice + 1).padStart(2, "0")}
        </span>
      </div>
    `;

    tarjeta.setAttribute("tabindex", "0");
    tarjeta.setAttribute("role", "button");

    tarjeta.addEventListener("click", () => {
      abrirProyecto(indice);
    });

    tarjeta.addEventListener("keydown", (evento) => {
      if (evento.key === "Enter" || evento.key === " ") {
        evento.preventDefault();
        abrirProyecto(indice);
      }
    });

    grilla.appendChild(tarjeta);

  });

}


/* =====================================
   FILTROS
===================================== */

botonesFiltro.forEach((boton) => {

  boton.addEventListener("click", () => {

    botonesFiltro.forEach((otroBoton) => {
      otroBoton.classList.remove("activo");
    });

    boton.classList.add("activo");

    const filtro = boton.dataset.filtro;

    mostrarProyectos(filtro);

  });

});


/* =====================================
   ABRIR PROYECTO
===================================== */

function abrirProyecto(indice) {

  proyectoActual = indice;

  const proyecto = proyectos[indice];

  inicio.classList.add("oculto");
  detalle.classList.remove("oculto");

  document.getElementById("detalle-categoria").textContent =
    `${String(indice + 1).padStart(2, "0")} / ${proyecto.categoriaTexto}`;

  document.getElementById("detalle-titulo").textContent =
    proyecto.titulo;

  document.getElementById("detalle-subtitulo").textContent =
    proyecto.subtitulo;

  document.getElementById("detalle-texto").textContent =
    proyecto.descripcion;


  /* Imagen principal */

  const imagenPrincipal =
    document.getElementById("detalle-imagen-principal");

  imagenPrincipal.innerHTML = "";

  const imagen = document.createElement("img");

  imagen.src = proyecto.portada;
  imagen.alt = proyecto.titulo;

  imagenPrincipal.appendChild(imagen);


  /* Galería */

  const galeria = document.getElementById("detalle-galeria");

  galeria.innerHTML = "";

  proyecto.imagenes.slice(1).forEach((ruta, posicion) => {

    const foto = document.createElement("img");

    foto.src = ruta;
    foto.alt = `${proyecto.titulo} - imagen ${posicion + 2}`;
    foto.loading = "lazy";

    if (proyecto.categoria === "web") {
      foto.classList.add("imagen-ancha");
    }

    galeria.appendChild(foto);

  });


  /* Enlace a tienda */

  const contenedorEnlace =
    document.getElementById("detalle-enlace");

  contenedorEnlace.innerHTML = "";

  if (proyecto.enlace) {

    const enlace = document.createElement("a");

    enlace.href = proyecto.enlace;
    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";
    enlace.className = "enlace-web";
    enlace.textContent = "VISITAR SITIO ↗";

    contenedorEnlace.appendChild(enlace);

  }


  /* Siguiente proyecto */

  const siguiente =
    proyectos[(indice + 1) % proyectos.length];

  document.getElementById("siguiente-proyecto").textContent =
    `SIGUIENTE: ${siguiente.titulo} →`;

  window.scrollTo(0, 0);

}


/* =====================================
   VOLVER AL INICIO
===================================== */

function volverAlInicio() {

  detalle.classList.add("oculto");
  inicio.classList.remove("oculto");

  window.scrollTo(0, 0);

}

document.getElementById("volver").addEventListener(
  "click",
  volverAlInicio
);

document.getElementById("logo").addEventListener(
  "click",
  (evento) => {
    evento.preventDefault();
    volverAlInicio();
  }
);

document.getElementById("enlace-proyectos").addEventListener(
  "click",
  () => {
    volverAlInicio();
  }
);


/* =====================================
   SIGUIENTE PROYECTO
===================================== */

document.getElementById("siguiente-proyecto").addEventListener(
  "click",
  () => {

    const siguienteIndice =
      (proyectoActual + 1) % proyectos.length;

    abrirProyecto(siguienteIndice);

  }
);


/* =====================================
   INICIAR PORTFOLIO
===================================== */

mostrarProyectos();

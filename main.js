const Pelis=[
    {
        nombre:"FIGHT CLUB",
        genero:"Drama",
        director:"David Fincher",
        anio:1999,
        descripcion:"Jack es un personaje insomne y desesperado por escapar de su fatal y aburrida vida. En un viaje en avión conoce a Tyler Durden, un carismático vendedor de jabón con una filosofía muy particular; Tyler cree que la destrucción de uno mismo lo que realmente hace que la vida merezca la pena.",
        imagen: "https://m.media-amazon.com/images/I/91uFUdkDTwL._AC_SY679_.jpg",
        dispoibilidad:0,
    },
    {
        nombre:"PERFECT BLUE",
        genero:"Animación",
        director:"Satoshi Kon",
        anio:1997,
        descripcion:"Una actriz ex-cantante de pop empieza a perder el sentido de la realidad cuando se ve acosada por un fantasma de su pasado.",
        imagen: "https://m.media-amazon.com/images/I/71Lm-DSj3pL._AC_SX466_.jpg",
        dispoibilidad:0,
    },
    {
        nombre:"OFFRET",
        genero:"Drama",
        director:"Andrei Tarkovsky",
        anio:1986,
        descripcion:"Mientras todos se reúnen para su cumpleaños, Alexander está afligido por la falta de espiritualidad en el mundo contemporáneo. De repente llega la noticia, se detonó la Tercera Guerra Mundial. Un peculiar cartero le convence de que una de sus criadas tiene el poder de salvar al mundo.",
        dispoibilidad:0,
        imagen:"https://m.media-amazon.com/images/I/71qV4UXjWgL._AC_SY679_.jpg",

    },
    {
        nombre:"LEVIATÁN",
        genero:"Drama",
        director:"Andrey Zvyagintsev",
        anio:2014,
        descripcion:"En una ciudad costera rusa, Kolya descubre que su casa será demolida. Es entonces cuando se ve obligado a luchar contra el alcalde, un hombre corrupto. Decide contratar a un abogado amigo suyo para que le ayude, pero la llegada de este hombre acaba por perjudicar a Kolya y a su familia…",
        dispoibilidad:0,
        imagen:"https://pics.filmaffinity.com/Leviat_n-417497080-mmed.jpg",

    },
    {
        nombre:"THE SECRET LIFE OF WALTER MITTY",
        genero:"Comedia",
        director:"Ben Stiller",
        anio:2013,
        descripcion:"Un oficinista que siempre esta dentro de mundos de fantasía donde vive una vida aventurera, mientras se enamora de su compañera de trabajo. Inicia un viaje global para arreglar las cosas cuando ambos trabajos se ven amenazados",
        dispoibilidad:0,
        imagen:"https://m.media-amazon.com/images/I/61T8AZlmCCL._AC_SY606_.jpg",

    },
    {
        nombre:"BUTCH CASSIDY AND THE SUNDANCE KID",
        genero:"Biografía",
        director:"George Roy Hill",
        anio:1969,
        descripcion:"Un grupo de jóvenes pistoleros se dedica a asaltar los bancos del estado de Wyoming y el correo ferroviario de la Unión Pacific. El jefe de la banda es el carismático Butch Cassidy, y su principal e inseparable compañero es Sundance Kid, otra de las pistolas más rápidas del Oeste.",
        dispoibilidad:0,
        imagen:"https://m.media-amazon.com/images/I/51nbUnfaSUL._AC_SS450_.jpg",

    },
    {
        nombre:"THE TRUMAN SHOW",
        genero:"Drama",
        director:"Peter Weir",
        anio:1998,
        descripcion:"Truman Burbank, ha estado frente a las cámaras desde antes de nacer, aunque no es consciente de este hecho. El pueblo donde vive es un decorado y las personas con las que se relaciona son actores. Al descubrir todo el entramado después de treinta años, tendrá que enfrentarse al creador del show.",
        dispoibilidad:0,
        imagen:"https://m.media-amazon.com/images/I/61K+MZ-LhzL._AC_SY450_.jpg",

    },
    {
        nombre:"A HIDDEN LIFE",
        genero:"Biografía",
        director:"Terrence Malick",
        anio:2019,
        descripcion:"Basada en hechos reales, esta es la historia de un héroe anónimo, Franz Jägerstätter, que se negó a luchar por los nazis en la Segunda Guerra Mundial. Cuando el campesino austríaco se enfrenta a la amenaza de ejecución, es su fe inquebrantable y su amor por su esposa Fani y sus hijos lo que mantiene vivo su espíritu.",
        dispoibilidad:0,
        imagen:"https://m.media-amazon.com/images/I/51czklx+jfL._AC_.jpg",

    },
    {
        nombre:"LA LA LAND",
        genero:"Comedia",
        director:"Damien Chazelle",
        anio:2016,
        descripcion:"Mientras navegan por sus carreras en Los Ángeles, un pianista y una actriz se enamoran mientras intentan reconciliar sus aspiraciones para el futuro.",
        dispoibilidad:0,
        imagen:"https://m.media-amazon.com/images/I/81X1pUOJp9L._AC_SS450_.jpg",

    },
    {
        nombre:"THE LONGEST YARD",
        genero:"Comedia",
        director:"Peter Segal",
        anio:2005,
        descripcion:"Los presos forman un equipo de fútbol para desafiar a los guardias de la prisión.",
        dispoibilidad:0,
        imagen:"https://m.media-amazon.com/images/I/51wanW1mGwL._AC_.jpg",

    }
]
class Pelicula{
    constructor(nombre, genero, director, anio, descripcion, dispoibilidad,imagen){
        this.nombre=nombre;
        this.genero=genero;
        this.director=director;
        this.anio=anio;
        this.descripcion=descripcion;
        this.dispoibilidad=dispoibilidad;
        this.imagen=imagen;
    }
}
class Repertorio{
    constructor(){
        this.inventario=[];
        this.carr=[];
    }
    cargarPeliculas(peliculas){
        this.invenatrio = peliculas.map((value)=> new Pelicula(value.nombre, value.genero, value.director, value.anio, value.descripcion, value.dispoibilidad, value.imagen))
    }
    peliculaAleatoria(peliculas){
        let norpa=[];
        let cont=0;
        this.carr= peliculas.reduce((acc,value,index,array)=>{
            let al = Math.floor(Math.random()*(9+1))
            if(norpa.includes(al)){
                return acc;
            }
            else if(cont<3){
                norpa.push(al);
                acc.push(array[al]);
                cont=cont +1;
            }
            return acc;
        },[])
    }
    BuscaP(peliculas){
        let bus=[];
        let queb=prompt("Que buscas?");
        bus=peliculas.filter((value)=> Object.values(value).includes(queb));
        console.log(bus);
    }
}

function htmlexp(value){
    let m1=document.querySelector("uno");
    let m2=document.querySelector("dos");
    let m3=document.querySelector("tres");

    const pd1=document.createElement("div");
    const pn1=document.createElement("div");
    const pg1=document.createElement("div");
    const pa1=document.createElement("div");
    const pde1=document.createElement("div");
    const pi1=document.createElement("div");
    pi1.className="imagenes"
    pi1.innerHTML=`<img src=${value[0].imagen}>`;

    const pd2=document.createElement("div");
    const pn2=document.createElement("div");
    const pg2=document.createElement("div");
    const pa2=document.createElement("div");
    const pde2=document.createElement("div");
    const pi2=document.createElement("div");
    pi2.className="imagenes"
    pi2.innerHTML=`<img src=${value[1].imagen}>`;

    const pd3=document.createElement("div");
    const pn3=document.createElement("div");
    const pg3=document.createElement("div");
    const pa3=document.createElement("div");
    const pde3=document.createElement("div");
    const pi3=document.createElement("div");
    pi3.className="imagenes"
    pi3.innerHTML=`<img src=${value[2].imagen}>`;

    
    pd1.textContent=value[0].director;
    pn1.textContent=value[0].nombre;
    pg1.textContent=value[0].genero;
    pa1.textContent=value[0].anio;
    pde1.textContent=value[0].descripcion;

    pd2.textContent=value[1].director;
    pn2.textContent=value[1].nombre;
    pg2.textContent=value[1].genero;
    pa2.textContent=value[1].anio;
    pde2.textContent=value[1].descripcion;

    pd3.textContent=value[2].director;
    pd3.textContent=value[2].director;
    pn3.textContent=value[2].nombre;
    pg3.textContent=value[2].genero;
    pa3.textContent=value[2].anio;
    pde3.textContent=value[2].descripcion;

    uno.appendChild(pn1);
    uno.appendChild(pd1);
    uno.appendChild(pg1);
    uno.appendChild(pa1);
    uno.appendChild(pde1);
    uno.appendChild(pi1);

    dos.appendChild(pn2);
    dos.appendChild(pd2);
    dos.appendChild(pg2);
    dos.appendChild(pa2);
    dos.appendChild(pde2);
    dos.appendChild(pi2);

    tres.appendChild(pn3);
    tres.appendChild(pd3);
    tres.appendChild(pg3);
    tres.appendChild(pa3);
    tres.appendChild(pde3);
    tres.appendChild(pi3);
}

const rep= new Repertorio();
rep.cargarPeliculas(Pelis);
console.log(rep.invenatrio);
rep.peliculaAleatoria(rep.invenatrio);
console.log(rep.carr);
htmlexp(rep.carr);
rep.BuscaP(rep.invenatrio);


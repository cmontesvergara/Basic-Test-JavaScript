const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const container = document.getElementById("container");
const inputNombre = document.getElementById("inputNombre");
const inputApellido = document.getElementById("inputApellido");
const divTask = document.getElementById("divTask");
const labelTask = document.getElementById("labelTask");
const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const check3 = document.getElementById("check3");
const pregunta = document.getElementById("pregunta");
const labelop1 = document.getElementById("labelop1");
const labelop2 = document.getElementById("labelop2");
const labelop3 = document.getElementById("labelop3");
const btnBack = document.getElementById("btnBack");
const iconbtnBack = document.getElementById("iconbtnBack");
const btnNext = document.getElementById("btnNext");
const iconbtnNext = document.getElementById("iconbtnNext");
const labelIndicador = document.getElementById("labelIndicador");
const progressBarContent = document.getElementById("progressBarContent");
let contPres = 0;
let usuario = {
  nombre: "",
  apellido: "",
  res: {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  },
};
const preguntas = [
  {
    indice: 1,
    pregunta: "¿Cual es el nombre del rio mas grande del mundo?",
    op1: "rio nilo",
    op2: "rio amazonas",
    op3: "rio danubio",
    correcta: "rio amazonas",
  },

  {
    indice: 2,
    pregunta: "Cual es el oceano mas grande del mundo",
    op1: "Oceano pacifico",
    op2: "Oceano indico",
    op3: "Oceano atlantico",
    correcta: "Oceano pacifico",
  },

  {
    indice: 3,
    pregunta: "¿Cual es el pais mas grande del mundo?",
    op1: "China",
    op2: "Rusia",
    op3: "India",
    correcta: "Rusia",
  },

  {
    indice: 4,
    pregunta: "¿Cual es el pais mas poblado de la tierra?",
    op1: "China",
    op2: "Rusia",
    op3: "Estados unidos",
    correcta: "China",
  },

  {
    indice: 5,
    pregunta: "¿Cual es la capital de Nicaragua?",
    op1: "Santiago",
    op2: "Brasilia",
    op3: "Managua",
    correcta: "Managua",
  },

  {
    indice: 6,
    pregunta: "¿Cual es la nacion mas pequeña del mundo?",
    op1: "Andorra",
    op2: "Monaco",
    op3: "El Vaticano",
    correcta: "El Vaticano",
  },

  {
    indice: 7,
    pregunta: "Cual es la unica ciudad que esta en dos continentes distintos?",
    op1: "Moscu",
    op2: "Estanbul",
    op3: "Berlin",
    correcta: "Estanbul",
  },

  {
    indice: 8,
    pregunta: "¿Cuando termino la segunda guerra mundial?",
    op1: "1945",
    op2: "1947",
    op3: "1943",
    correcta: "1945",
  },

  {
    indice: 9,
    pregunta: "¿Cual es el primer pais en utilizar la bomba atomica?",
    op1: "Rusia",
    op2: "Estados unidos",
    op3: "Japon",
    correcta: "Japon",
  },

  {
    indice: 10,
    pregunta: "¿Quien escribio la Odisea?",
    op1: "Homero",
    op2: "Virgilio",
    op3: "Cervantes",
    correcta: "Homero",
  },
];

section2.style.display = "none";
section3.style.display = "none";
function task(color, text) {
  labelTask.textContent = text;
  divTask.style.backgroundColor = color;
  divTask.style.display = "grid";
  hiddentask();
}
function hiddentask() {
  setTimeout(function () {
    divTask.style.display = "none";
  }, 1000);
}
function iniciarTest() {
  if (inputNombre.value == "" || inputApellido.value == "") {
    task("#ff5d5d", "Todos los parametros son requeridos");
  } else {
    section1.style.display = "none";
    section2.style.display = "grid";
    usuario.nombre = inputNombre.value;
    usuario.apellido = inputApellido.value;
    console.log(usuario.nombre);
    console.log(usuario.apellido);
    next(true);
  }
}
function check1Onclick() {
  check2.checked = false;
  check3.checked = false;
}
function check2Onclick() {
  check1.checked = false;
  check3.checked = false;
}
function check3Onclick() {
  check1.checked = false;
  check2.checked = false;
}
function cargarPregunta(val) {
  check1.checked = false;
  check2.checked = false;
  check3.checked = false;
  pregunta.innerText = preguntas[val].pregunta;
  labelop1.innerText = preguntas[val].op1;
  labelop2.innerText = preguntas[val].op2;
  labelop3.innerText = preguntas[val].op3;
}
function nextClick() {
  next(capCheck());
}
function next(boolea) {
  if (boolea === true) {
    if (contPres < 11) {
      if (contPres === 10) {
        //progressBarContent.textContent = `${contPres}`;
        //progressBarContent.style.width = `${contPres * 10}%`;
        const a = document.getElementById(`a${9}`);
        a.style.backgroundColor = "#ff6732";
        actPB();
      } else {
        const a = document.getElementById(`a${contPres}`);
        a.style.backgroundColor = "#ff6732";
        
        //progressBarContent.textContent = `${contPres}`;
        //progressBarContent.style.width = `${contPres * 10}%`;
        actPB();
        console.log(a.getAttribute('style','backgroundColor'))
        cargarPregunta(contPres);
        contPres = contPres + 1;
        labelIndicador.textContent = `Pregunta ${contPres} de 10`;
      }
      
      
      if (usuario.res[9] !== "") {
            section2.style.display='none';
            section3.style.display='grid';
            loadResult();
      }
    }

    
  }
}
function capCheck() {
  let valiu = false;
  let contador = contPres-1;
  
  if (contPres > 0) {
    if (
      check1.checked == false &&
      check2.checked == false &&
      check3.checked == false
    ) {
      task("red", "La pregunta no ha sido respondida");
    } else {
      if (check1.checked === true) {
        
        usuario.res[`${contador}`] = labelop1.textContent;
        valiu = true;
        
      } else if (check2.checked === true) {
        
        usuario.res[`${contador}`] = labelop2.textContent;
        valiu = true;
      } else if (check3.checked === true) {
        
        usuario.res[`${contador}`] = labelop3.textContent;
        valiu = true;
      };
    }
  }
  return valiu;
}
function redirigir(id){
    if(capCheck()){
        contPres=id;
        next(true);
    }
}
function actPB(){
    
    let ax = 0;
    for(let i=0; i<10;i++){
        const n = document.getElementById(`a${i}`);
        if(n.getAttribute('style','backgroundColor')===null){
            ax=ax+1;
        }
    }
    progressBarContent.textContent = `${9-ax}`;
    progressBarContent.style.width = `${(9-ax) * 10}%`;
}
function back(){
    if((contPres)===1){
        task('','Esta es la primera pregunta, no puedes retroceder mas')
    }else{
        redirigir(contPres-2);
    }
    
}
function loadResult(){
    container.style.height='100%';
    
    let cont =0;
    let aprText = 'No has Aprobado'
    for(let i=0; i<10;i++){
        if(preguntas[i].correcta===usuario.res[i]){
                cont =  cont+1;
        }
    }
    if(cont>5){aprText='Has Aprobado'}
    section3.insertAdjacentHTML("afterbegin",`<label id='labelNUser'>${usuario.nombre} ${usuario.apellido} ${aprText}</label>`);
    for(let i=0; i<10;i++){
        
        section3.insertAdjacentHTML("afterbegin",`
        <div>
            <label id='labelPreguntaUser'>${preguntas[i].pregunta}</label>
            <label id='label1User'>Respuesta Seleccionada: </label>
            <label id='labelR1User'>${usuario.res[i]}</label>
            <label id='label2User'>Respuesta Correcta: </label>
            <label id='labelR2User'>${preguntas[i].correcta}</label>


        </div>
        `);
        
    }
    
}

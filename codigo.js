function fQuestion0() {
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Cuál es el genero que más te gusta?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion1();' id="startButton"> Comedia </button> 
    <button onclick = 'fQuestion2();' id="startButton"> Drama </button>
    <button onclick = 'fQuestion3();' id="startButton"> Aventura </button>
    <button onclick = 'fQuestion4();' id="startButton"> Terror </button>
    <button onclick = 'fQuestion5();' id="startButton"> Crimen </button>
    <button onclick = 'fQuestion6();' id="startButton"> Fantasía </button>
    <button onclick = 'fQuestion7();' id="startButton"> Ciencia ficción </button>
    <button onclick = 'fQuestion8();' id="startButton"> Musicales </button>
    `;
}

//Comedia
function fQuestion1(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Qué te gusta más...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion11();' id="startButton"> La imitación burlesca de las cosas </button> 
    <button onclick = 'fQuestion12();' id="startButton"> Los temas inapropiados </button>
    `;
}

//imitacion burlesca cosas
function fQuestion11(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te interesa...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion111();' id="startButton"> El humor relacionado con la muerte </button> 
    <button onclick = 'fQuestion112();' id="startButton"> Las reflexiones sobre la naturaleza humana </button>
    <button onclick = 'fQuestion113();' id="startButton"> Las historias donde las apariencias engañan </button>
    `;
}

//fiesta salchichas
function fQuestion111(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `

    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> La fiesta de las salchichas (2016) - 82% </h2><br><br>
        <img src="imagenes/111.jpg" class="imagen" >
        <iframe src="sinopsis/111.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
    </div>
    
    `;
}

//fant sr zorro
function fQuestion112(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> El fantastico señor zorro (2009) - 93% </h2>
        <img src="imagenes/112.jpg" class="imagen" >
        <iframe src="sinopsis/112.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;  
}

//shrek
function fQuestion113(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Shrek (2001) - 90% </h2>
        <img src="imagenes/113.jpg" class="imagen" >
        <iframe src="sinopsis/113.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`; 
}

//temas inapropiados
function fQuestion12(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te interesa...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion121();' id="startButton"> Las criticas a la sociedad </button> 
    <button onclick = 'fQuestion122();' id="startButton"> La libertad de expresión </button>
    `;
}

//fritz el gato
function fQuestion121(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Fritz el gato (1972) - 60% </h2>
        <img src="imagenes/121.jpg" class="imagen" >
        <iframe src="sinopsis/121.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;  
}

//south park
function fQuestion122(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> South park (1999) - 88% </h2>
        <img src="imagenes/122.jpg" class="imagen" >
        <iframe src="sinopsis/122.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//drama
function fQuestion2(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Qué te gusta más...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion21();' id="startButton"> La atracción emocional entre personajes </button> 
    <button onclick = 'fQuestion22();' id="startButton"> Que las historias te hagan reír en algunos momentos </button>
    <button onclick = 'fQuestion23();' id="startButton"> Las narraciones de la vida de una persona </button>
    <button onclick = 'fQuestion24();' id="startButton"> Los conflictos armados </button>
    `;
}

//atraccion entre personajes
function fQuestion21(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te gusta...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion211();' id="startButton"> Protagonistas mujeres </button> 
    <button onclick = 'fQuestion212();' id="startButton"> Protagonistas hombres </button>
    `;
}

//protagonistas mujeres
function fQuestion211(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te interesa...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion2111();' id="startButton"> Las princesas </button> 
    <button onclick = 'fQuestion2112();' id="startButton"> Prefieres no princesas </button>
    `;
}

//princesas
function fQuestion2111(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Prefieres...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion21111();' id="startButton"> Las historias de envidia </button> 
    <button onclick = 'fQuestion21112();' id="startButton"> Las historias de secuestros </button>
    `;
}

//blanca nieves y los 7 enanos
function fQuestion21111(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Blanca nieves y los 7 enanos (1937) - 98% </h2>
        <img src="imagenes/21111.jpg" class="imagen" >
        <iframe src="sinopsis/21111.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;  
}

//enredados
function fQuestion21112(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Enredados (2010) - 89% </h2>
        <img src="imagenes/21112.jpg" class="imagen" >
        <iframe src="sinopsis/21112.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;   
}

//no princesas
function fQuestion2112(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te interesa...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion21121();' id="startButton"> Las historias ambientadas en los 90's </button> 
    <button onclick = 'fQuestion21122();' id="startButton"> La ambientación en la primera guerra mundial </button>
    <button onclick = 'fQuestion21123();' id="startButton"> Que las historias tengan viajes en el tiempo </button>
    `;
}

//Susurros del corazon
function fQuestion21121(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Susurros del corazon (1995) - 94% </h2>
        <img src="imagenes/21121.jpg" class="imagen" >
        <iframe src="sinopsis/21121.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;  
}

//El castillo ambulante
function fQuestion21122(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> El castillo ambulante (2004) - 93% </h2>
        <img src="imagenes/castillo.jpg" class="imagen" >
        <iframe src="sinopsis/castillo.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>
    `; 
}

//Your name
function fQuestion21123(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Your name (2016) - 98% </h2>
        <img src="imagenes/21123.jpg" class="imagen" >
        <iframe src="sinopsis/21123.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`; 
}

//protagonistas hombres
function fQuestion212(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te gustan...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion2121();' id="startButton"> Las casi imposibles historias de amor </button> 
    <button onclick = 'fQuestion2122();' id="startButton"> Las historias de perceverancia </button>
    `;
}

//La dama y el vagabundo
function fQuestion2121(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> La dama y el vagabundo (1955) - 93% </h2>
        <img src="imagenes/2121.jpg" class="imagen" >
        <iframe src="sinopsis/2121.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;  
}

//Alladin
function fQuestion2122(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Aladdin (1992) - 95% </h2>
        <img src="imagenes/2122.jpg" class="imagen" >
        <iframe src="sinopsis/2122.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;   
}

//historias reir 
function fQuestion22(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te gusta...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion221();' id="startButton"> La deshumanización de las relaciones sociales </button> 
    <button onclick = 'fQuestion222();' id="startButton"> Los efectos de la vejez y las consecuencias del consumismo </button>
    <button onclick = 'fQuestion223();' id="startButton"> Sentir incomodidad mientras es una critica al materialismo </button>
    `;
} 

//anomalisa
function fQuestion221(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Anomalisa (2015) - 92% </h2>
        <img src="imagenes/221.jpg" class="imagen" >
        <iframe src="sinopsis/221.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//the triplets of belleville
function fQuestion222(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> The triplets of belleville (2003) - 94% </h2>
        <img src="imagenes/222.jpg" class="imagen" >
        <iframe src="sinopsis/222.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>
    `; 
}

//the house
function fQuestion223(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> The house (2022) - 85% </h2>
        <img src="imagenes/223.jpg" class="imagen" >
        <iframe src="sinopsis/223.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    

}

//narraciones vida persona 
function fQuestion23(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te interesa...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion231();' id="startButton"> Los campos de concentración post-guerra </button> 
    <button onclick = 'fQuestion232();' id="startButton"> El intento de replicar el estilo de un afamado artista </button>
    <button onclick = 'fQuestion233();' id="startButton"> La revolución islamica </button>
    `;
}


//Josep
function fQuestion231(){
   
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Josep (2021) - 82% </h2>
        <img src="imagenes/231.jpg" class="imagen" >
        <iframe src="sinopsis/231.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;  
}


//cartas de van gogh
function fQuestion232(){

    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Cartas de van gogh (2018) - 86% </h2>
        <img src="imagenes/232.jpg" class="imagen" >
        <iframe src="sinopsis/232.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`; 
}


//Persepolis
function fQuestion233(){

    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Persépolis (2008) - 92%  </h2>
        <img src="imagenes/233.jpg" class="imagen" >
        <iframe src="sinopsis/233.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;  
}

//conflictos armados
function fQuestion24(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te gusta...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion241();' id="startButton"> La ambientación en Japón de los años 20's </button> 
    <button onclick = 'fQuestion242();' id="startButton"> La ambientación en la guerra fría </button>
    <button onclick = 'fQuestion243();' id="startButton"> La ambientación en china </button>
    <button onclick = 'fQuestion244();' id="startButton"> La ambientación en Afganistán </button>
    `;
}

//se levanta el viento
function fQuestion241(){

    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `

    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Se levanta el viento (2013) - 88% </h2>
        <img src="imagenes/241.jpg" class="imagen" >
        <iframe src="sinopsis/241.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`; 
}

//el gigante de hierro
function fQuestion242(){

    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> El gigante de hierro (1968) - 90%  </h2>
        <img src="imagenes/242.jpg" class="imagen" >
        <iframe src="sinopsis/242.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`; 
}

//mulan
function fQuestion243(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Mulán (1998) - 85% </h2>
        <img src="imagenes/243.jpg" class="imagen" >
        <iframe src="sinopsis/243.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;   
}

//el pan de la guerra
function fQuestion244(){

    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> El pan de la guerra (2017) - 92% </h2>
        <img src="imagenes/244.jpg" class="imagen" >
        <iframe src="sinopsis/244.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;   
}


//aventura
function fQuestion3(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Qué te gusta más...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion31();' id="startButton"> Los piratas </button> 
    <button onclick = 'fQuestion32();' id="startButton"> El tema de supervivencia </button>
    <button onclick = 'fQuestion33();' id="startButton"> Los acontecimientos grandiosos y de superación </button>
    <button onclick = 'fQuestion34();' id="startButton"> Los espías </button>
    <button onclick = 'fQuestion35();' id="startButton"> Los seres de ficción con cualidades extraordinarias </button>
    <button onclick = 'fQuestion36();' id="startButton"> Las técnicas de lucha orientales </button>
    <button onclick = 'fQuestion37();' id="startButton"> Los sucesos o situaciones de fantasía </button>
    `;
}

//piratas
function fQuestion31(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te interesan...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion311();' id="startButton"> Las expediciones intergalácticas </button> 
    <button onclick = 'fQuestion312();' id="startButton"> Los personajes incomprendidos </button>
    <button onclick = 'fQuestion313();' id="startButton"> Las imitaciones burlescas de las cosas </button>
    `;
}

//Planeta del tesoro
function fQuestion311(){
   
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Planeta del tesoro (2002) - 72%  </h2>
        <img src="imagenes/311.jpg" class="imagen" >
        <iframe src="sinopsis/311.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;  
}

//Thinker bell: hadas y piratas
function fQuestion312(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Thinker bell: hadas y piratas (2014) - 81% </h2>
        <img src="imagenes/312.jpg" class="imagen" >
        <iframe src="sinopsis/312.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//Piratas! Una loca aventura
function fQuestion313(){

    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Piratas! Una loca aventura (2012) - 86% </h2>
        <img src="imagenes/313.jpg" class="imagen" >
        <iframe src="sinopsis/313.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;   
}

//supervivencia
function fQuestion32(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te interesa...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion321();' id="startButton"> El tema de la guerra y la devastación ambiental </button> 
    <button onclick = 'fQuestion322();' id="startButton"> Los relatos sobre el dolor y la pérdida </button>
    <button onclick = 'fQuestion323();' id="startButton"> La ambientación en la segunda guerra mundial </button>
    `;
}

//Nausicaa del valle del viento
function fQuestion321(){
 
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Nausicaa del valle del viento (1984) - 89% </h2>
        <img src="imagenes/321.jpg" class="imagen" >
        <iframe src="sinopsis/321.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>
    `;   
}

//Canción del mar
function fQuestion322(){

    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Canción del mar (2014) - 92%</h2>
        <img src="imagenes/322.jpg" class="imagen" >
        <iframe src="sinopsis/322.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;  
}

//La tumba de las luciernagas
function fQuestion323(){

    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> La tumba de las luciernagas (1988) - 95%  </h2>
        <img src="imagenes/323.jpg" class="imagen" >
        <iframe src="sinopsis/323.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;  
}

//grandiosos y de superación
function fQuestion33(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te gustan...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion331();' id="startButton"> Los sucesos de fantasía </button> 
    <button onclick = 'fQuestion332();' id="startButton"> Las secciones cantadas </button>
    `;
}

//situaciones de fantasia
function fQuestion331(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Prefieres...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion3311();' id="startButton"> Las peliculas hechas en japón </button> 
    <button onclick = 'fQuestion3312();' id="startButton"> Las peliculas hechas en otros países </button>
    `;
}


//japón
function fQuestion3311(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te interesan...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion33111();' id="startButton"> Los temas como la codicia, apatía y autodescubrimiento </button> 
    <button onclick = 'fQuestion33112();' id="startButton"> El respeto a la memoria, el perdón y la empatía </button>
    `;
}


//El viaje de chihiro
function fQuestion33111(){

    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> El viaje de chihiro (2001) - 96% </h2>
        <img src="imagenes/33111.jpg" class="imagen" >
        <iframe src="sinopsis/33111.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;  
}


//Kubo y la busqueda del samurai
function fQuestion33112(){
  
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Kubo y la busqueda del samurai (2016) - 86% </h2>
        <img src="imagenes/33112.jpg" class="imagen" >
        <iframe src="sinopsis/33112.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;   
}

//hechas en otros paises
function fQuestion3312(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te gusta...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion33121();' id="startButton"> Que las peliculas hayan sido hechas en este siglo </button> 
    <button onclick = 'fQuestion33122();' id="startButton"> Que las peliculas hayan sido hechas en el siglo pasado </button>
    `;
}

//este siglo
function fQuestion33121(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te interesan...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion331211();' id="startButton"> Los temas de paso de la desconfianza a la confianza </button> 
    <button onclick = 'fQuestion331212();' id="startButton"> Los temas de envejecer y entender la vida </button>
    <button onclick = 'fQuestion331213();' id="startButton"> La superación personal y el esfuerzo </button>
    `;
}

//Raya y el ultimo dragón
function fQuestion331211(){
 
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Raya y el ultimo dragón (2021) - 92%  </h2>
        <img src="imagenes/331211.jpg" class="imagen" >
        <iframe src="sinopsis/331211.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//Up
function fQuestion331212(){

    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Up (2009) - 90% </h2>
        <img src="imagenes/331212.jpg" class="imagen" >
        <iframe src="sinopsis/331212.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//Klaus
function fQuestion331213(){

    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Klaus (2019) - 96% </h2>
        <img src="imagenes/331213.jpg" class="imagen" >
        <iframe src="sinopsis/331213.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//El principe de egipto
function fQuestion33122(){
   
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> El principe de egipto (1998) - 85% </h2>
        <img src="imagenes/33122.jpg" class="imagen" >
        <iframe src="sinopsis/33122.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//secciones cantadas
function fQuestion332(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te interesa...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion3321();' id="startButton"> La busqueda de la virtud, la fuerza de espíritu y el impulso civilizador </button> 
    <button onclick = 'fQuestion3322();' id="startButton"> El respeto y la idea de que nadie debe considerarse mejor que otras personas </button>
    `;
}

//Hércules
function fQuestion3321(){

    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Hércules (1997)- 84% </h2>
        <img src="imagenes/3321.jpg" class="imagen" >
        <iframe src="sinopsis/3321.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//El rey león
function fQuestion3322(){

    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> El rey león (1994) - 94% </h2>
        <img src="imagenes/3322.jpg" class="imagen" >
        <iframe src="sinopsis/3322.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//espias
function fQuestion34(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te interesa...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion341();' id="startButton"> Los temas como el trabajo en equipo y la humildad </button> 
    <button onclick = 'fQuestion342();' id="startButton"> Los temas de vencer el miedo a lo desconocido y vivir experiencias </button>
    `;
}

//Espías a escondidas
function fQuestion341(){
 
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Espías a escondidas (2019) - 90% </h2>
        <img src="imagenes/341.jpg" class="imagen" >
        <iframe src="sinopsis/341.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//Los pinguinos de Madagascar
function fQuestion342(){
   
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Los pinguinos de Madagascar (2014) - 74% </h2>
        <img src="imagenes/342.jpg" class="imagen" >
        <iframe src="sinopsis/342.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//superheroes
function fQuestion35(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te gusta...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion351();' id="startButton"> Que las películas tengan escenas de acción </button> 
    <button onclick = 'fQuestion352();' id="startButton"> La sensación constante de estar viendo un comic </button>
    <button onclick = 'fQuestion353();' id="startButton"> Que las historias te hagan reir en algunos momentos </button>
    `;
}

//escenas de acción
function fQuestion351(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Prefieres...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion3511();' id="startButton"> Que los protagonistas sean una familia </button> 
    <button onclick = 'fQuestion3512();' id="startButton"> Que los protagonistas sean amigos </button>
    `;
}

//Los increíbles
function fQuestion3511(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Los increíbles (2004) - 90% </h2>
        <img src="imagenes/3511.jpg" class="imagen" >
        <iframe src="sinopsis/3511.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//Grandes heroes
function fQuestion3512(){

    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Grandes heroes (2014) - 90% </h2>
        <img src="imagenes/3512.jpg" class="imagen" >
        <iframe src="sinopsis/3512.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//Spider-man into the spider verse
function fQuestion352(){
  
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Spider-man: into the spider verse (2018) - 97% </h2>
        <img src="imagenes/352.jpg" class="imagen" >
        <iframe src="sinopsis/352.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//reir en algunos momentos
function fQuestion353(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te gustan...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion3531();' id="startButton"> La imitación diferente de cosas </button> 
    <button onclick = 'fQuestion3532();' id="startButton"> Los problemas de la convivencia en familia </button>
    `;
}

//The lego batman movie
function fQuestion3531(){

    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> The lego batman movie (2017) - 85% </h2>
        <img src="imagenes/3531.jpg" class="imagen" >
        <iframe src="sinopsis/3531.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>
    `;    
}

//Mi villano favorito
function fQuestion3532(){
  
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Mi villano favorito (2010) - 81% </h2>
        <img src="imagenes/3532.jpg" class="imagen" >
        <iframe src="sinopsis/3532.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//lucha oriental
function fQuestion36(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te interesa...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion361();' id="startButton"> El esfuerzo y afán de superación </button> 
    <button onclick = 'fQuestion362();' id="startButton"> Las películas hechas con origen de un videojuego </button>
    `;
}

//Kung fu panda
function fQuestion361(){
   
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Kung fu panda (2008) - 85% </h2>
        <img src="imagenes/361.jpg" class="imagen" >
        <iframe src="sinopsis/361.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//Mortal kombat leyendas
function fQuestion362(){
 
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Mortal kombat leyendas (2020) - 87% </h2>
        <img src="imagenes/362.jpg" class="imagen" >
        <iframe src="sinopsis/362.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//sucesos de fantasia
function fQuestion37(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te interesan...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion371();' id="startButton"> Las películas hechas en Japón </button> 
    <button onclick = 'fQuestion372();' id="startButton"> Las películas hechas en otros países </button>
    `;
}

//japón
function fQuestion371(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te gusta...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion3711();' id="startButton"> La curiosidad por conocer cosas nuevas </button> 
    <button onclick = 'fQuestion3712();' id="startButton"> El autodescubrimiento y no juzgar por las apariencias </button>
    `;
}

//Mi vecino Totoro
function fQuestion3711(){
   
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Mi vecino Totoro (1988) - 94% </h2>
        <img src="imagenes/3711.jpg" class="imagen" >
        <iframe src="sinopsis/3711.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;   
}


//El castillo ambulante
function fQuestion3712(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> El castillo ambulante (2004) - 90% </h2>
        <img src="imagenes/castillo.jpg" class="imagen" >
        <iframe src="sinopsis/castillo.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}


function fQuestion372(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te gusta...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion3721();' id="startButton"> La curiosidad por conocer cosas nuevas </button> 
    <button onclick = 'fQuestion3722();' id="startButton"> El autodescubrimiento de las emociones </button>
    <button onclick = 'fQuestion3723();' id="startButton"> Las tramas que se centran en resolver un misterio </button>
    <button onclick = 'fQuestion3724();' id="startButton"> Saltar al vacío en busca de los sueños perdidos </button>
    `;
}

//El principito
function fQuestion3721(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> El principito (2015) - 88%</h2>
        <img src="imagenes/3721.jpg" class="imagen" >
        <iframe src="sinopsis/3721.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//Inside out
function fQuestion3722(){

    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Inside out (2015) - 84% </h2>
        <img src="imagenes/3722.jpg" class="imagen" >
        <iframe src="sinopsis/3722.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;   

}

//Wallace y gromit la batalla de los vegetales
function fQuestion3723(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Wallace y gromit: la batalla de los vegetales (2005) - 87% </h2>
        <img src="imagenes/3723.jpg" class="imagen" >
        <iframe src="sinopsis/3723.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//I lost my body
function fQuestion3724(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> I lost my body (2019) - 96% </h2>
        <img src="imagenes/3724.jpg" class="imagen" >
        <iframe src="sinopsis/3724.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//terror
function fQuestion4(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Qué te gusta más...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion41();' id="startButton"> Las cosas que son dificiles de comprender o explicar </button> 
    <button onclick = 'fQuestion42();' id="startButton"> Las películas que están hechas de un videojuego </button>
    <button onclick = 'fQuestion43();' id="startButton"> Las películas de vivir con escasos medios o en condiciones adversas </button>
    <button onclick = 'fQuestion44();' id="startButton"> Las películas con representaciones muy graficas de muertes </button>
    <button onclick = 'fQuestion45();' id="startButton"> Los sucesos o situaciones de fantasía </button>
    `;
}

//cosas dificiles de comprender o explicar
function fQuestion41(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te gusta...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion411();' id="startButton"> Introducirte en los mismos miedos que los protagonistas </button> 
    <button onclick = 'fQuestion412();' id="startButton"> Los mounstruos, hechizos y reirte en algunos momentos </button>
    <button onclick = 'fQuestion413();' id="startButton"> Los sucesos de fantasía </button>
    `;
}

//mismos miedos
function fQuestion411(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te interesan...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion4111();' id="startButton"> Los temas controversiales como el consumo, las apariencias y medios de comunicación </button> 
    <button onclick = 'fQuestion4112();' id="startButton"> Los sueños y la alteración de la realidad </button>
    `;
}

//Perfect blue
function fQuestion4111(){
   
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Perfect blue (1997) - 85% </h2>
        <img src="imagenes/4111.jpg" class="imagen" >
        <iframe src="sinopsis/4111.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//Paprika: el reino de los sueños
function fQuestion4112(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Paprika: el reino de los sueños (2006) - 85% </h2>
        <img src="imagenes/4112.jpg" class="imagen" >
        <iframe src="sinopsis/4112.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//El alucinante mundo de norman
function fQuestion412(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> El alucinante mundo de norman (2012) - 80% </h2>
        <img src="imagenes/412.jpg" class="imagen" >
        <iframe src="sinopsis/412.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;   
}

function fQuestion413(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te interesa...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion4131();' id="startButton"> El concepto de descubrimiento personal y la solidaridad </button> 
    <button onclick = 'fQuestion4132();' id="startButton"> Las realidades alternas con enseñanzas de unión </button>
    `;
}

//La casa de los sustos
function fQuestion4131(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> La casa de los sustos (2006) - 75% </h2>
        <img src="imagenes/4131.jpg" class="imagen" >
        <iframe src="sinopsis/4131.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//Coraline y la puerta secreta
function fQuestion4132(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `

    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Coraline y la puerta secreta (2009) - 90% </h2>
        <img src="imagenes/4132.jpg" class="imagen" >
        <iframe src="sinopsis/4132.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//hechas de videojuego
function fQuestion42(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te interesan...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion421();' id="startButton"> Los seres que tienen alguna anormalidad impropia del orden natural y de apariencia temible </button> 
    <button onclick = 'fQuestion422();' id="startButton"> Los cadaveres reanimados por sustancias bio-organicas </button>
    `;
}

//Dante's inferno
function fQuestion421(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Dante's inferno (2010) - 71% </h2>
        <img src="imagenes/421.jpg" class="imagen" >
        <iframe src="sinopsis/421.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//Resident evil: damnation
function fQuestion422(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Resident evil: damnation (2012) - 80% </h2>
        <img src="imagenes/422.jpg" class="imagen" >
        <iframe src="sinopsis/422.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//supervivencia
function fQuestion43(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te interesan...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion431();' id="startButton"> Que se muestre el lado cruel de la naturaleza </button> 
    <button onclick = 'fQuestion432();' id="startButton"> El trabajo en equipo y la amistad </button>
    `;
}

//Orejas largas
function fQuestion431(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Orejas largas (1978) - 84% </h2>
        <img src="imagenes/431.jpg" class="imagen" >
        <iframe src="sinopsis/431.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//La leyenda de la llorona
function fQuestion432(){
   
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> La leyenda de la llorona (2011) - 66% </h2>
        <img src="imagenes/432.jpg" class="imagen" >
        <iframe src="sinopsis/432.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//representaciones graficas muertes
function fQuestion44(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te interesan...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion441();' id="startButton"> Las criaturas que se alimentan de la sangre de otros seres vivos </button> 
    <button onclick = 'fQuestion442();' id="startButton"> Los seres que pertenecen a otro lugar </button>
    `;
}

//Vampire hunter D
function fQuestion441(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Vampire hunter D (1985) - 78% </h2>
        <img src="imagenes/441.jpg" class="imagen" >
        <iframe src="sinopsis/441.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//Gantz:O
function fQuestion442(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Gantz:O (2016) - 67% </h2>
        <img src="imagenes/442.jpg" class="imagen" >
        <iframe src="sinopsis/442.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;   
}

//sucesos fantasia
function fQuestion45(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te interesan...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion451();' id="startButton"> Los relatos de acontecimientos posibles desarrollados en un marco imaginario</button> 
    <button onclick = 'fQuestion452();' id="startButton"> Las secciones cantadas </button>
    `;
}

function fQuestion451(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te gusta...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion4511();' id="startButton"> El regreso a la vida después de la muerte </button> 
    <button onclick = 'fQuestion4512();' id="startButton"> La permanencia con vida de una cosa, a pesar del paso del tiempo </button>
    `;
}

//Frankenweenie
function fQuestion4511(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Frankenweenie (2012) - 87% </h2>
        <img src="imagenes/4511.jpg" class="imagen" >
        <iframe src="sinopsis/4511.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//Heavy metal
function fQuestion4512(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Heavy metal (1981) - 67% </h2>
        <img src="imagenes/4512.jpg" class="imagen" >
        <iframe src="sinopsis/4512.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//El extraño mundo de Jack
function fQuestion452(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> El extraño mundo de Jack (1993) - 92% </h2>
        <img src="imagenes/452.jpg" class="imagen" >
        <iframe src="sinopsis/452.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//crimen
function fQuestion5(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te interesan...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion51();' id="startButton"> Los miembros de una banda de delincuentes que actúa en las grandes ciudades </button> 
    <button onclick = 'fQuestion52();' id="startButton"> El mantenimiento del orden público y la seguridad de los ciudadanos </button>
    `;
}

//Los tipos malos
function fQuestion51(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Los tipos malos (2022) - 90% </h2>
        <img src="imagenes/51.jpg" class="imagen" >
        <iframe src="sinopsis/51.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//orden publico
function fQuestion52(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te interesan...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion521();' id="startButton"> Dos protagonistas que entablan una amistad mientras resuelven un crimen </button> 
    <button onclick = 'fQuestion522();' id="startButton"> Un protagonista que se encarga de detener a un delincuente </button>
    `;
}

//Zootopia
function fQuestion521(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
    <div class="sinopsis"> 
        <h2> Zootopia (2016) - 95% </h2>
        <img src="imagenes/521.jpg" class="imagen" >
        <iframe src="sinopsis/521.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//Ghost in the shell
function fQuestion522(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
    <div class="sinopsis"> 
        <h2> Ghost in the shell (1995) - 93% </h2>
        <img src="imagenes/522.jpg" class="imagen" >
        <iframe src="sinopsis/522.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//fantasía
function fQuestion6(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Qué te gusta más...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion61();' id="startButton"> Las secciones cantadas </button> 
    <button onclick = 'fQuestion62();' id="startButton"> Que la historia se centre en el crecimiento personal de un protagonista adolescente </button>
    <button onclick = 'fQuestion63();' id="startButton"> La ambientación en el mundo real ligeramente modificado </button>
    <button onclick = 'fQuestion64();' id="startButton"> Las historias repletas de elementos ficticios </button>
    <button onclick = 'fQuestion65();' id="startButton"> La amistad entre dos protagonistas como la principal relación de la trama </button>
    <button onclick = 'fQuestion66();' id="startButton"> Que el personaje tenga que pasar por desafios dificiles </button>
    `;
}

//secciones cantadas 
function fQuestion61(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te gusta...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion611();' id="startButton"> La atracción emocional entre personajes </button> 
    <button onclick = 'fQuestion612();' id="startButton"> Que la historia se centre en un problema familiar </button>
    <button onclick = 'fQuestion613();' id="startButton"> Los mundos fantásticos </button>
    `;
}

//El libro de la vida
function fQuestion611(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> El libro de la vida (2014) - 80% </h2>
        <img src="imagenes/611.jpg" class="imagen" >
        <iframe src="sinopsis/611.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//Coco
function fQuestion612(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Coco (2017) - 94% </h2>
        <img src="imagenes/612.jpg" class="imagen" >
        <iframe src="sinopsis/612.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//Alicia en el país de las maravillas
function fQuestion613(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Alicia en el país de las maravillas (1951) - 81% </h2>
        <img src="imagenes/613.jpg" class="imagen" >
        <iframe src="sinopsis/613.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}


//crecimiento prota adolescente
function fQuestion62(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te interesa...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion621();' id="startButton"> La inteligencia emocional </button> 
    <button onclick = 'fQuestion622();' id="startButton"> La aceptación de uno mismo </button>
    `;
}


//Turning red
function fQuestion621(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Turning red (2022) - 90% </h2>
        <img src="imagenes/621.jpg" class="imagen" >
        <iframe src="sinopsis/621.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;   
}

//Luca
function fQuestion622(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Luca (2021) - 89% </h2>
        <img src="imagenes/622.jpg" class="imagen" >
        <iframe src="sinopsis/622.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//mundo ligeramente modificado
function fQuestion63(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te interesa...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion631();' id="startButton"> Los elementos fantasticos como la magia </button> 
    <button onclick = 'fQuestion632();' id="startButton"> Que la historia transcurra en un lugar en específico </button>
    `;
}

//fantasticos magia
function fQuestion631(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te gustan...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion6311();' id="startButton"> Los sucesos extraños e imprevisibles </button> 
    <button onclick = 'fQuestion6312();' id="startButton"> Representación de acciones y situaciones humanas conflictivas </button>
    `;
}

//extraños e imprevisibles
function fQuestion6311(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Prefieres...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion63111();' id="startButton"> Que las historias te hagan reír en algunos momentos </button> 
    <button onclick = 'fQuestion63112();' id="startButton"> Que las historias tengan escenas de acción </button>
    `;
}

//Unidos
function fQuestion63111(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Unidos (2020) - 91% </h2>
        <img src="imagenes/63111.jpg" class="imagen" >
        <iframe src="sinopsis/63111.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//El origen de los guardianes
function fQuestion63112(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> El origen de los guardianes (2012) - 83% </h2>
        <img src="imagenes/63112.jpg" class="imagen" >
        <iframe src="sinopsis/63112.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//situaciones conflictivas
function fQuestion6312(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Prefieres...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion63121();' id="startButton"> La tracción emocional entre personajes </button> 
    <button onclick = 'fQuestion63122();' id="startButton"> Temas profundos como el existencialismo </button>
    <button onclick = 'fQuestion63123();' id="startButton"> Temas como el descubrimiento personal </button>
    `;
}

//Frozen
function fQuestion63121(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Frozen (2013) - 88% </h2>
        <img src="imagenes/63121.jpg" class="imagen" >
        <iframe src="sinopsis/63121.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//Wakin life
function fQuestion63122(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Wakin life (2001) - 87% </h2>
        <img src="imagenes/63122.jpg" class="imagen" >
        <iframe src="sinopsis/63122.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//Soul
function fQuestion63123(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Soul (2020) - 92% </h2>
        <img src="imagenes/63123.jpg" class="imagen" >
        <iframe src="sinopsis/63123.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//lugar especifico
function fQuestion632(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te gustan...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion6321();' id="startButton"> Los sucesos imprevisibles </button> 
    <button onclick = 'fQuestion6322();' id="startButton"> Las situaciones conflictivas </button>
    `;
}

//James y el durazno gigante
function fQuestion6321(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> James y el durazno gigante (1996) - 80% </h2>
        <img src="imagenes/6321.jpg" class="imagen" >
        <iframe src="sinopsis/6321.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//Dumbo
function fQuestion6322(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Dumbo (1941) - 85% </h2>
        <img src="imagenes/6322.jpg" class="imagen" >
        <iframe src="sinopsis/6322.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//elementos ficticios
function fQuestion64(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te interesa...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion641();' id="startButton"> Las princesas </button> 
    <button onclick = 'fQuestion642();' id="startButton"> La acción y aventura </button>
    `;
}

//princesas
function fQuestion641(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Prefieres...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion6411();' id="startButton"> Las situaciones humanas conflictivas </button> 
    <button onclick = 'fQuestion6412();' id="startButton"> Que se acentúen los aspectos patéticos y sentimentales </button>
    `;
}

//La bella durmiente
function fQuestion6411(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> La bella durmiente (1959) - 85% </h2>
        <img src="imagenes/6411.jpg" class="imagen" >
        <iframe src="sinopsis/6411.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//La sirenita
function fQuestion6412(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> La sirenita (1989) - 90% </h2>
        <img src="imagenes/6412.jpg" class="imagen" >
        <iframe src="sinopsis/6412.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//El gato con botas
function fQuestion642(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> El gato con botas (2011) - 77% </h2>
        <img src="imagenes/642.jpg" class="imagen" >
        <iframe src="sinopsis/642.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//amistad dos varones
function fQuestion65(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Prefieres...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion651();' id="startButton"> El "ser diferente es bueno" </button> 
    <button onclick = 'fQuestion652();' id="startButton"> El valor de la amistad y las relaciones sociales </button>
    `;
}

//Como entrenar a tu dragón
function fQuestion651(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Como entrenar a tu dragón (2010) - 95% </h2>
        <img src="imagenes/651.jpg" class="imagen" >
        <iframe src="sinopsis/651.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//Toy story
function fQuestion652(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Toy story (1995) - 88% </h2>
        <img src="imagenes/652.jpg" class="imagen" >
        <iframe src="sinopsis/652.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;   
}

//Moana
function fQuestion66(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Moana (2016) - 92% </h2>
        <img src="imagenes/66.jpg" class="imagen" >
        <iframe src="sinopsis/66.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}


function fQuestion7(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te gustan...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion71();' id="startButton"> Las situaciones de fantasía </button> 
    <button onclick = 'fQuestion72();' id="startButton"> Las historias que suceden después de un apocalipsis </button>
    <button onclick = 'fQuestion73();' id="startButton"> Los sistemas ideales que parecen de muy dificil realización </button>
    <button onclick = 'fQuestion74();' id="startButton"> Las sociedades futuras </button>
    <button onclick = 'fQuestion75();' id="startButton"> Las historias en el espacio que muestran grandes avances tecnológicos </button>
    <button onclick = 'fQuestion76();' id="startButton"> Los viajes en el tiempo </button>
    <button onclick = 'fQuestion77();' id="startButton"> Los futuros distópicos que presentan avances tecnológicos únicos </button>
    `;
}

//situaciones fantasía
function fQuestion71(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Prefieres...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion711();' id="startButton"> La apreciación de la vida más allá del dolor </button> 
    <button onclick = 'fQuestion712();' id="startButton"> La redención y libertad </button>
    `;
}

//Más allá de la luna
function fQuestion711(){

    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Más allá de la luna (2020) - 75% </h2>
        <img src="imagenes/711.jpg" class="imagen" >
        <iframe src="sinopsis/711.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//Megamente
function fQuestion712(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Megamente (2010) - 72% </h2>
        <img src="imagenes/712.jpg" class="imagen" >
        <iframe src="sinopsis/712.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//Wall-e
function fQuestion72(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Wall-e (2008) - 93% </h2>
        <img src="imagenes/72.jpg" class="imagen" >
        <iframe src="sinopsis/72.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//sistemas ideales
function fQuestion73(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Prefieres...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion731();' id="startButton"> Que algunas escenas te hagan reír </button> 
    <button onclick = 'fQuestion732();' id="startButton"> Que las películas tengan escenas de acción </button>
    `;
}

//Robots
function fQuestion731(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Robots (2005) - 64% </h2>
        <img src="imagenes/731.jpg" class="imagen" >
        <iframe src="sinopsis/731.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//The animatrix
function fQuestion732(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> The animatrix (2003) - 83% </h2>
        <img src="imagenes/732.jpg" class="imagen" >
        <iframe src="sinopsis/732.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//A scanner darkly
function fQuestion74(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> A scanner darkly (2006) - 71% </h2>
        <img src="imagenes/74.jpg" class="imagen" >
        <iframe src="sinopsis/74.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//espacio grandes avances
function fQuestion75(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Prefieres...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion751();' id="startButton"> Mantener la espectativa sobre una situación </button> 
    <button onclick = 'fQuestion752();' id="startButton"> Las situaciones humanas conflictivas </button>
    `;
}

//Star wars: the clone wars
function fQuestion751(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Star wars: the clone wars (2008) - 91% </h2>
        <img src="imagenes/751.jpg" class="imagen" >
        <iframe src="sinopsis/751.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//Lightyear
function fQuestion752(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Lightyear (2022) - 80% </h2>
        <img src="imagenes/752.jpg" class="imagen" >
        <iframe src="sinopsis/752.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//viajes en el tiempo
function fQuestion76(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Prefieres...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion761();' id="startButton"> Que algunas escenas te hagan reír </button> 
    <button onclick = 'fQuestion762();' id="startButton"> Las situaciones fantasiosas </button>
    `;
}

//Mr peabody y sherman
function fQuestion761(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Mr peabody y sherman (2014) - 78% </h2>
        <img src="imagenes/761.jpg" class="imagen" >
        <iframe src="sinopsis/761.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;   
}

//La familia del futuro
function fQuestion762(){
     
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> La familia del futuro (2007) - 71% </h2>
        <img src="imagenes/762.jpg" class="imagen" >
        <iframe src="sinopsis/762.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;     
}

//futuros distopicos
function fQuestion77(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te gustan...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion771();' id="startButton"> Las visiones distópicas del futuro con tecnología avanzada y un bajo nivel de vida </button> 
    <button onclick = 'fQuestion772();' id="startButton"> Las tecnologías retrofuturistas y una estética inspirada en el siglo 19 </button>
    `;
}

//Akira
function fQuestion771(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Akira (1988) - 90% </h2>
        <img src="imagenes/771.jpg" class="imagen" >
        <iframe src="sinopsis/771.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//El castillo en el cielo
function fQuestion772(){
     
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> El castillo en el cielo (1986) - 91% </h2>
        <img src="imagenes/772.jpg" class="imagen" >
        <iframe src="sinopsis/772.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;     
}

//musicales
function fQuestion8(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te gustan...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion81();' id="startButton"> Que las historias se centren en un problema familiar </button> 
    <button onclick = 'fQuestion82();' id="startButton"> Que algunas escenas te hagan reír </button>
    <button onclick = 'fQuestion83();' id="startButton"> Las situaciones humanas conflictivas </button>
    `;
}

//problema familiar
function fQuestion81(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Prefieres...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion811();' id="startButton"> El crecimiento personal de un protagonista adolescente </button> 
    <button onclick = 'fQuestion812();' id="startButton"> Reirte mientras pueden suceder cosas imprevisibles </button>
    `;
}


//Encanto
function fQuestion811(){
     
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Encanto (2021) - 91% </h2>
        <img src="imagenes/811.jpg" class="imagen" >
        <iframe src="sinopsis/811.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//reirte cosas imprevisibles
function fQuestion812(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te gusta...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion8121();' id="startButton"> El tema de aprender sobre la muerte </button> 
    <button onclick = 'fQuestion8122();' id="startButton"> El tema de ser conscientes de nuestras acciones </button>
    `;
}

//Vivo
function fQuestion8121(){
   
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Vivo (2021) - 83% </h2>
        <img src="imagenes/8121.jpg" class="imagen" >
        <iframe src="sinopsis/8121.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//Happy feet
function fQuestion8122(){
     
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Happy feet (2006) - 73% </h2>
        <img src="imagenes/8122.jpg" class="imagen" >
        <iframe src="sinopsis/8122.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;     
}

function fQuestion82(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te gusta...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion821();' id="startButton"> La atracción emocional entre personajes </button> 
    <button onclick = 'fQuestion822();' id="startButton"> Las situaciones humanas conflictivas </button>
    `;
}

//La princesa y el sapo
function fQuestion821(){
     
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> La princesa y el sapo (2009) - 80% </h2>
        <img src="imagenes/821.jpg" class="imagen" >
        <iframe src="sinopsis/821.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;     
}

//Sing
function fQuestion822(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Sing (2016) - 72% </h2>
        <img src="imagenes/822.jpg" class="imagen" >
        <iframe src="sinopsis/822.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;    
}

//situaciones humanas conflictivas
function fQuestion83(){
    document.body.style.backgroundColor = '#f2f2f2';
    document.getElementById("questionToAsk").innerHTML = "Te gusta...?";
    document.getElementById("btnArea").innerHTML = `
    <button onclick = 'fQuestion831();' id="startButton"> Que la historia se centre en un problema familiar </button> 
    <button onclick = 'fQuestion832();' id="startButton"> Reirte mientras pueden suceder cosas imprevisibles </button>
    <button onclick = 'fQuestion833();' id="startButton"> Las historias que están ambientadas en una época histórica determinada </button>
    `;
}

//El rey león
function fQuestion831(){
    
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> El rey león (1994) . 93% </h2>
        <img src="imagenes/831.jpg" class="imagen" >
        <iframe src="sinopsis/831.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;     
}

//Tarzan
function fQuestion832(){
     
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Tarzan (1999) - 82% </h2>
        <img src="imagenes/832.jpg" class="imagen" >
        <iframe src="sinopsis/832.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;     
}

//Pocahontas
function fQuestion833(){
     
    document.getElementById("questionToAsk").innerHTML = "Te recomendamos...";
    document.getElementById("btnArea").innerHTML = `
    
    <div class="sinopsis"> 
        <a href="rmpa.html" class="volver">Volver al inicio</a> <br><br>
        <h2> Pocahontas (1995) - 64% </h2>
        <img src="imagenes/833.jpg" class="imagen" >
        <iframe src="sinopsis/833.txt" frameborder="0" border="0" cellspacing="0"
        style="width: 500px; height: 600px;"> </iframe>
        
    </div>`;     
}
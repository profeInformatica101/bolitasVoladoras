let bolitasVoladoras = new Array();
let colores = ['red', 'green', 'blue', 'yellow'];
let total = 10;
let velocidad = 2;


//corre solo una vez cuando inicia el programa
function setup(){
    console.log("setup ");
    createCanvas(800, 800);
    background(9);

   


    j1 = new BolitaVoladora(400,400, 30,colores[Math.floor(Math.random()*colores.length)]);
    j2 = new BolitaVoladora(600,600, 30,'green');
    j3 = new BolitaVoladora(800,700, 40,'blue');
    j4 = new BolitaVoladora(100,700, 40,'blue');
    j4 = new BolitaVoladora(5,5, 100,'red');


bolitasVoladoras.push(j1);
bolitasVoladoras.push(j2);
bolitasVoladoras.push(j3);
bolitasVoladoras.push(j4);
}

//corre continuamente después de la función setup
function draw(){
    console.log("draw");
    

    bolitasVoladoras.forEach(function(bolitaVoladora){
        bolitaVoladora.mover();
        bolitaVoladora.mostrar();
    });
   
}
function totalBolitas(){
    clear();
    bolitasVoladoras = [];
    this.total = document.getElementById("rangoID").value;
    total_ = this.total;
    while(total_ > 0){
        bolitasVoladoras.push(new BolitaVoladora(random(0,800),random(0,800), random(5,100),colores[Math.floor(Math.random()*colores.length)]));
        total_ -=1;
    }
    
    document.getElementById("numBolasSpanID").innerHTML = this.total;
}
function totalVelocidad(){
    alert( document.getElementById("rangovelocidadID").value);


    this.velocidad = document.getElementById("rangovelocidadID").value;
    bolitasVoladoras.forEach(function(bolitaVoladora){
        bolitaVoladora.setVelocidad(this.velocidad);
        
    });

    document.getElementById("velocidadSpanID").innerHTML =  this.velocidad;
}

class BolitaVoladora{
    constructor(tempX, tempY, tempDiametro, color){
        this.color = color;
        this.x = tempX;
        this.y = tempY;
        this.diametro = tempDiametro;
        this.velocidad = 2.5;
    }
  
    mover(){
        this.x = this.x + random(-this.velocidad,this.velocidad);
        this.y = this.y +random(-this.velocidad,this.velocidad);
    }
   
    mostrar(){
    if(mouseIsPressed){
        ellipse(this.x,this.y,this.diametro,this.diametro);
        fill(colores[Math.floor(Math.random()*colores.length)]);
    }else{
        rect(this.x,this.y,this.diametro,this.diametro);
        fill(this.color);
    }
  
        
    }

    setVelocidad(velocidad){
        this.velocidad = velocidad;
    }

    escuchar(){
        if(mouseIsPressed){
            if(mouseX >= this.x && mouseX<=this.x+diametro){
            }
        }
    }
    obtenerColorRandom(){
        return colores[Math.floor(Math.random()*colores.length)];
    }

    acciones(){
        mover();
        mostrar();
        escuchar();
    }

}

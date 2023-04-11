import { Component } from '@angular/core';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent {
 
  
  somar(n1:number,n2:number)
    {

   return n1+n2
    }



    //--

    musica = 'Meca cereja';
    autor = 'keyblack';
    album = 'trap';

    //--
    classeCss='vermelho';
    mudarCor(){
      if (this.classeCss == 'vermelho')
    {
      this.classeCss = 'azul'
    }
    else{
      this.classeCss='vermelho';
    }
    };


    //--

    nome = 'Jorge';
    sobrenome = 'Miguel';

    //--
    
    maisculo(palavra:String)
    {
      return palavra.toUpperCase();
    }

    //--

    img1='img1';
    img2='img2';
    img3='img3';

    //--

 pais = 'alemanha';

 mudarPais()
 {
  if(this.pais=='alemanha')
  {
    this.pais = 'brasil'
  }
  else
  {
    this.pais='alemanha'
  }
 }


 //--

 imagem = 'assets/img1.jpg';


 img12='img';
 img23='img2';
 img34='img3';
 imgN='assets/img1.1.jpg';

 trocarImg()
 {
  if(this.imagem == 'assets/img1.jpg')
  {
    this.imagem = 'assets/img2.jpg'
  }
  else
  {
    this.imagem='assets/img3.jpg'
  }
 }

 //--

 aparecer='';

 //--

 n1='';
 n2='';

 //--

 dog ='';
 pincher ='';
 labrador ='';


 //--

 cidade = '';


 //--

 email = false;
contTel = true;

//--

genero = '';

//-- 
curso='';
candidato='';

//--

exemplonome = '';

mudarNome()
{
  
    this.exemplonome = 'miguel';
  
}

//--

valor1 =0;
valor2 = 0;
resultado=0;

operacao(op:string){
  if(op=="+"){
    this.resultado= this.valor1 + this.valor2;
  }else if(op=="-"){
    this.resultado= this.valor1 - this.valor2;
  }else if(op=="*"){
    this.resultado= this.valor1 * this.valor2;
  }else{
    this.resultado= this.valor1 / this.valor2;
  }
}
//--

nomeexemplo2 = '';

//--
botao =false;
sumirDiv()
{
  this.botao = !this.botao;
}


//--
digitou="";

//--
numero=0;


//--
campo ='';

//--lista1

nomeAparecer=''
sobrenomeAparecer=''

//-- 

nomePersonagem ='';


perso1='pikachu';
perso2='charmander';
perso3='bulbassauro';

//--

contador ='';

contagem(contador: string)
{
  return contador.length;
}

//--

nomeSocial = '';
nomeUsuario='';


//--ngFor

arrayBichos = ['Cachorro', 'Gato', 'Tartaruga', 'Pássaro'];

arrayObj = ['Celular','Notebook','Computador','Garrafa','Mouse','Caneca'];

arrayFilmes = ['Parasita', 'Ex_Machina', 'Divertida Mente', 'Forrest Gump'];
arrayNotas = [10, 7, 9, 8];

arrayFilm = ['Os Vingadores','Os 3 patetas','Batman','SuperMan','IT a coisa','Carros'];

vetorFilme = ['batman','hulk','superman'];

vetorPais = ['Brasil','EUA','Espanha','Irlanda'];



}

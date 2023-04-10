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

}

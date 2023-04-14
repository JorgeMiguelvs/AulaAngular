import { Component } from '@angular/core';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent {

  //--1
  somar(n1: number, n2: number) {

    return n1 + n2
  }



  //--2

  musica = 'Meca cereja';
  autor = 'Keyblack';
  album = 'Trap';

  //--3
  classeCss = 'vermelho';
  mudarCor() {
    if (this.classeCss == 'vermelho') {
      this.classeCss = 'azul'
    }
    else {
      this.classeCss = 'vermelho';
    }
  };

  //--4

  nome = 'Jorge';
  sobrenome = 'Miguel';

  //--5

  maisculo(palavra: String) {
    return palavra.toUpperCase();
  }

  //--6

  disableInput = true;

  //--7

  apertou() {
    alert('apertou');
  }
  //--8

  paisC = 'cssPais';

  //--9

  corBtn = 'red';

  mudarCorBtn() {
    if (this.corBtn == 'red') {
      this.corBtn = 'blue'
    }
    else {
      this.corBtn = 'red'
    }
  }
  //--10


  texto = '';


  // adicionarTexto(){
  //   if(this.texto=='')
  //   {
  //    return this.texto = 'isso é uma div';
  //   }
  // }

  //--12
  aparecerName = 'Jorge'; // prompt('Qual seu nome?')

  mostrarName() {
    this.disableInput = !this.disableInput;
    this.aparecerName = this.aparecerName;
  }

  //--13
  mudarFundo = 'mudarFundo';

  trocarRed() {
    if (this.mudarFundo == 'mudarFundo') {
      this.mudarFundo = 'red';
    }
  }

  trocarGreen() {
    if (this.mudarFundo == 'mudarFundo') {
      this.mudarFundo = 'green';
    }
  }

  trocarBlue() {
    if (this.mudarFundo == 'mudarFundo') {
      this.mudarFundo = 'blue';
    }
  }

  //--14


  mudouCor = 'red';
  passou() {
    if (this.mudouCor == 'red') {
      this.mudouCor = 'blue';
    }
    else {
      this.mudouCor = 'red';
    }
  }

  //--15
  estado = 'sp';
  mudarEstado() {
    if (this.estado == 'sp') {
      this.estado = 'rio';
    }
    else {
      this.estado = 'sp';
    }
  }

  //--16

  h1style = 'h1';

  //--17

  usuario = ''

  mostrarNome(usuario: String) {
    return usuario.toUpperCase;
  }

  //--18

  btnColor = 'blue';

  btnCor() {
    if (this.btnColor == 'blue') {
      this.btnColor = 'green';
    }
    else {
      this.btnColor = 'blue';
    }
  }


  //--19

  pais = 'brasil';

  mudarPais() {
    if (this.pais == 'brasil') {
      this.pais = 'alemanha'
    }
    else {
      this.pais = 'brasil'
    }
  }

  //--20

  imagem = 'assets/img1.jpg';

  trocarImg() {
    if (this.imagem == 'assets/img1.jpg') {
      this.imagem = 'assets/img2.jpg'
    }
    else {
      this.imagem = 'assets/img3.jpg'
    }
  }

  //--21

  aparecer = '';

  //--22

  n1 = '';
  n2 = '';

  //--23

  dog = '';
  pincher = '';
  labrador = '';

  //--24

  cidade = '';

  //--25

  email = false;
  contTel = true;

  //--26

  genero = '';

  //-- 27
  curso = '';
  candidato = '';

  //--28

  exemplonome = '';

  mudarNome() {

    this.exemplonome = 'miguel';

  }

  //--29

  valor1 = 0;
  valor2 = 0;
  resultado = 0;

  operacao(op: string) {
    if (op == "+") {
      this.resultado = this.valor1 + this.valor2;
    } else if (op == "-") {
      this.resultado = this.valor1 - this.valor2;
    } else if (op == "*") {
      this.resultado = this.valor1 * this.valor2;
    } else {
      this.resultado = this.valor1 / this.valor2;
    }
  }

  //--30

  nomeexemplo2 = '';

  //--31
  botao = false;
  sumirDiv() {
    this.botao = !this.botao;
  }

  //--32
  digitou = "";

  //--33
  numero = 0;

  //--34
  campo = '';

  //--lista1 35

  nomeAparecer = ''
  sobrenomeAparecer = ''

  //--36

  msgUser = '';

  aparecerMsg() {
    return alert(this.msgUser);
  }



  //-- 37

  nomePersonagem = '';


  perso1 = 'pikachu';
  perso2 = 'charmander';
  perso3 = 'bulbassauro';

  //--38

  contador = '';

  contagem(contador: string) {
    return contador.length;
  }

  //--39

  nomeSocial = '';
  nomeUsuario = '';

  //--40

  logomarca = '';

  //--ngFor

  //--41
  arrayBichos = ['Cachorro', 'Gato', 'Tartaruga', 'Pássaro'];
  //--42
  arrayObj = ['Celular', 'Notebook', 'Computador', 'Garrafa', 'Mouse', 'Caneca'];
  //--43
  arrayFilmes = ['Parasita', 'Ex_Machina', 'Divertida Mente', 'Forrest Gump'];
  arrayNotas = [10, 7, 9, 8];
  //--44
  arrayFilm = ['Os Vingadores', 'Os 3 patetas', 'Batman', 'SuperMan', 'IT a coisa', 'Carros'];
  //--45
  vetorFilme = ['batman', 'hulk', 'superman'];
  //--46
  vetorPais = ['Brasil', 'EUA', 'Espanha', 'Irlanda'];

  mostrarPais() {
    return alert(this.vetorPais[1]);
  }

}

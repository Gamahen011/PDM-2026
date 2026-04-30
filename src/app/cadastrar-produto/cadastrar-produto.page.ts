import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonTitle, IonToolbar, IonList } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { Produto, Tarefa } from '../desafio2/desafio2.page';
import { salvarDados, enviarAlert } from '../fuctions';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.page.html',
  styleUrls: ['./cadastrar-produto.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule, IonButton, IonList, IonItem, IonInput]
})
export class CadastrarProdutoPage implements OnInit {

  produtos: Produto[] = [];
  tarefas: Tarefa[] = [];
  nome: string = '';
  preco: number | undefined = undefined;
  estoque: number | undefined = undefined;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cadastrarProduto(): string {
    this.produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
    this.tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
    if (this.nome && this.preco && this.estoque) {
      var novoProduto: Produto = {
        id: this.produtos.length + 1,
        nome: this.nome,
        preco: this.preco,
        estoque: this.estoque,
      };
      this.produtos.push(novoProduto);
      salvarDados(this.produtos, this.tarefas);
      this.nome = '';
      this.preco = undefined;
      this.estoque = undefined;
      return 'Produto cadastrado com sucesso!';
    }
    else {
      return ('Preencha todos os campos!');
    }
  }

  Alert(mensagem: string) {
    enviarAlert(mensagem);
  }

}

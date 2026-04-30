import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonInput, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { Produto } from '../desafio2/desafio2.page';
import { enviarAlert } from '../fuctions';

@Component({
  selector: 'app-formatar-preco',
  templateUrl: './formatar-preco.page.html',
  styleUrls: ['./formatar-preco.page.scss'],
  standalone: true,
  imports: [IonInput, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule]
})
export class FormatarPrecoPage implements OnInit {

  idProduto: number | undefined = undefined;
  precoFormatado: string = '';
  sucesso: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  formatarPreco(id?: number): string {
    this.precoFormatado = "";
    if (this.idProduto !== undefined) {
      const produtos: Produto[] = JSON.parse(localStorage.getItem('produtos') || '[]');
      produtos.forEach(p => {
        if (p.id === id) {
          this.precoFormatado = "R$ " + p.preco + ",00"
          this.sucesso = true;
        }
      });
    }
    if (this.sucesso) {
      this.sucesso = false;
      return "Preço do produto formatado com sucesso!";
    }
    return "Produto não encontrado!";
  }

  Alert(mensagem: string): void {
    enviarAlert(mensagem);
  }



}

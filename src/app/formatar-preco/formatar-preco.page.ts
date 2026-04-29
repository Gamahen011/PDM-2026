import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Produto, Tarefa } from '../desafio2/desafio2.page';

@Component({
  selector: 'app-formatar-preco',
  templateUrl: './formatar-preco.page.html',
  styleUrls: ['./formatar-preco.page.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonInput, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FormatarPrecoPage implements OnInit {

  idProduto: number | undefined = undefined;
  precoFormatado: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irParaMenu() {
    window.location.href = '/desafio2';
  }

  formatarPreco(id?: number): string {
    if (this.idProduto !== undefined) {
      const produtos: Produto[] = JSON.parse(localStorage.getItem('produtos') || '[]');
      produtos.forEach(p => {
        if (p.id === id) {
          this.precoFormatado = "R$ " + p.preco.toFixed(2);
        }
      });
    }
    return this.precoFormatado;
  }


}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonItem, IonTitle, IonToolbar, IonList } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { Produto } from '../desafio2/desafio2.page';
import { calcularTotalEstoque, formatarPreco } from '../fuctions.js';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.page.html',
  styleUrls: ['./listar-produtos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule, IonList, IonItem, RouterModule]
})
export class ListarProdutosPage implements OnInit {

  produtos: Produto[] = [];
  valorTotalEstoque: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  TotalEstoque() {
    this.produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
    this.valorTotalEstoque = calcularTotalEstoque();
    return this.produtos;
  }

  preco(id: number): string {
    this.produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
        return formatarPreco(id);
  }

}

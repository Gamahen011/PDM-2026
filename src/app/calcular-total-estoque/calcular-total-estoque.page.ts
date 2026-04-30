import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { Produto } from '../desafio2/desafio2.page';

@Component({
  selector: 'app-calcular-total-estoque',
  templateUrl: './calcular-total-estoque.page.html',
  styleUrls: ['./calcular-total-estoque.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule]
})
export class CalcularTotalEstoquePage implements OnInit {

  total: number = 0;
  totalFormatado: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  calcularTotalEstoque(): string {
    let produtos: Produto[] = JSON.parse(localStorage.getItem('produtos') || '[]');
    this.total = 0;
    produtos.forEach(p => {
    this.total += (p.preco * p.estoque);
    });
    this.totalFormatado = this.total + ",00 reais";
    return this.totalFormatado;
  }

}

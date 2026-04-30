import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';

export type Produto = {
  id: number,
  nome: string,
  preco: number,
  estoque: number
}

export type Tarefa = {
  id: number,
  titulo: string,
  concluida: boolean,
  prioridade: "baixa" | "média" | "alta",
  dataCriacao: Date
}

@Component({
  selector: 'app-desafio2',
  templateUrl: './desafio2.page.html',
  styleUrls: ['./desafio2.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule]
})
export class Desafio2Page implements OnInit {

  produtos: Produto[] = [
      {id:1, nome:"Maçã", preco:10, estoque:50},
      {id:2, nome:"Melão", preco:20, estoque:30},
      {id:3, nome:"Goiaba", preco:15, estoque:40},
      {id:4, nome:"Pera", preco:15, estoque:35},
      {id:5, nome:"Tomate", preco:7, estoque:60}    
  ]

  tarefas: Tarefa[] = [
      {id:1, titulo:"Comprar produtos", concluida: false, prioridade:"média", dataCriacao: new Date(2026, 4, 20)},
      {id:2, titulo:"Limpar estoque", concluida: true, prioridade:"alta", dataCriacao: new Date(2026, 1, 22)},
      {id:3, titulo:"Contratar funcionário", concluida: true, prioridade:"baixa", dataCriacao: new Date(2025, 12, 10)},
      {id:4, titulo:"Declaração de renda", concluida: true, prioridade:"alta", dataCriacao: new Date(2025, 12, 29)},
      {id:5, titulo:"Pagar impostos", concluida: false, prioridade:"média", dataCriacao: new Date(2026, 3, 15)}    
  ] 

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  salvarDados() {
    localStorage.setItem('produtos', JSON.stringify(this.produtos));
    localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
  }

}

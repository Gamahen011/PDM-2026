
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonItem, IonList, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { Tarefa } from '../desafio2/desafio2.page';

@Component({
  selector: 'app-filtrar-tarefas',
  templateUrl: './filtrar-tarefas.page.html',
  styleUrls: ['./filtrar-tarefas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule, IonButton, IonList, IonItem]
})
export class FiltrarTarefasPage implements OnInit {

  concluidas: Tarefa[] = [];
  pendentes: Tarefa[] = [];
  tarefas: Tarefa[] = [];
  filtro: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  filtrarTarefas(): [Tarefa[], Tarefa[]] {
    this.concluidas = [];
    this.pendentes = [];
    this.tarefas = [];
    this.tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
   this.tarefas.forEach(t => { 
       if (t.concluida) 
           (this.concluidas.push(t)) 
   })
   this.tarefas.forEach(t => { 
       if (!t.concluida) 
           (this.pendentes.push(t)) 
   }) 
   return [this.concluidas, this.pendentes];
} 

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonItem, IonList, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { Tarefa } from '../desafio2/desafio2.page';
import { filtrarTarefas } from '../fuctions.js'; 

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.page.html',
  styleUrls: ['./listar-tarefas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonList, IonItem, CommonModule, FormsModule, RouterModule]
})
export class ListarTarefasPage implements OnInit {

  tarefas: Tarefa[] = [];
  concluidas: Tarefa[] = [];
  pendentes: Tarefa[] = [];
  filtro: string = '';

  constructor(private router: Router) { }

  ngOnInit() {}

    filtrarTarefas() {
      this.tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
      this.concluidas = filtrarTarefas()[0];
      this.pendentes = filtrarTarefas()[1];
      return this.tarefas;
    }

}

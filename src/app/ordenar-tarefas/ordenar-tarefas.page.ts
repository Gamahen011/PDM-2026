import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonItem, IonList, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { Tarefa } from '../desafio2/desafio2.page';

@Component({
  selector: 'app-ordenar-tarefas',
  templateUrl: './ordenar-tarefas.page.html',
  styleUrls: ['./ordenar-tarefas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule, IonButton, IonItem, IonList]
})
export class OrdenarTarefasPage implements OnInit {

  tarefas: Tarefa[] = []
  tarefasOrdenadas: Tarefa[] = []

  constructor() { }

  ngOnInit() {
  }

  ordenarTarefas(): void {
    this.tarefasOrdenadas = []
    this.tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
    this.tarefas.forEach (t => {
      if (t.prioridade === "alta")
        this.tarefasOrdenadas.push(t)
    }
    )
    this.tarefas.forEach (t => {
      if (t.prioridade === "média")
        this.tarefasOrdenadas.push(t)
    }
    )
    this.tarefas.forEach (t => {
      if (t.prioridade === "baixa")
        this.tarefasOrdenadas.push(t)
    }
    )
  }




}

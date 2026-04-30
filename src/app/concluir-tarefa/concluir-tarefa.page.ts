import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonList, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { Produto, Tarefa } from '../desafio2/desafio2.page';
import { salvarDados } from '../fuctions';

@Component({
  selector: 'app-concluir-tarefa',
  templateUrl: './concluir-tarefa.page.html',
  styleUrls: ['./concluir-tarefa.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule, IonButton, IonList, IonItem, IonInput]
})
export class ConcluirTarefaPage implements OnInit {

  idTarefa: number = -1;
  tarefas: Tarefa[] = [];
  produtos: Produto[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  concluirTarefa(id: number): string {
    this.tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
    this.produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
    for (let tarefa of this.tarefas) {
      if (tarefa.id === id) {
        tarefa.concluida = true;
        this.idTarefa = -1;
        salvarDados(this.produtos, this.tarefas);
        alert(`Tarefa "${tarefa.titulo}" concluída com sucesso!`);
        break;
      }
    }
    return "Tarefa não encontrada!";
  }






}

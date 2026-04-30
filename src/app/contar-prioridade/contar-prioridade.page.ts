import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonItem, IonList, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { Tarefa } from '../desafio2/desafio2.page';

@Component({
  selector: 'app-contar-prioridade',
  templateUrl: './contar-prioridade.page.html',
  styleUrls: ['./contar-prioridade.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule, IonButton, IonList, IonItem]
})
export class ContarPrioridadePage implements OnInit {

  tarefas: Tarefa[] = [];
  alta: number = 0;
  media: number = 0;
  baixa: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  contarPorPrioridade(): number[] {
   this.alta = 0;
   this.media = 0;
   this.baixa = 0;
   this.tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
   this.tarefas.forEach(t => {
       if (t.prioridade === "alta")
           (this.alta += 1);
       if (t.prioridade === "média")
           (this.media += 1);
       if (t.prioridade === "baixa")
           (this. baixa += 1);
   })
   return [this.alta, this.media, this.baixa];
}
}

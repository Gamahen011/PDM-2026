import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonInput, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formatar-preco',
  templateUrl: './formatar-preco.page.html',
  styleUrls: ['./formatar-preco.page.scss'],
  standalone: true,
  imports: [IonInput, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FormatarPrecoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irParaMenu() {
    this.router.navigate(['/desafio2']);
  }

  formatarPreco(id: number): string {
    return ("R$ " + id)
  }


}

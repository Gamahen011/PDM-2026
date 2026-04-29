import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'desafio2',
    loadComponent: () => import('./desafio2/desafio2.page').then( m => m.Desafio2Page)
  },
  {
    path: 'formatar-preco',
    loadComponent: () => import('./formatar-preco/formatar-preco.page').then( m => m.FormatarPrecoPage)
  },
];

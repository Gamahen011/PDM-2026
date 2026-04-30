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
    path: 'formatarpreco',
    loadComponent: () => import('./formatar-preco/formatar-preco.page').then( m => m.FormatarPrecoPage)
  },
  {
    path: 'calculartotalestoque',
    loadComponent: () => import('./calcular-total-estoque/calcular-total-estoque.page').then( m => m.CalcularTotalEstoquePage)
  },  {
    path: 'filtrar-tarefas',
    loadComponent: () => import('./filtrar-tarefas/filtrar-tarefas.page').then( m => m.FiltrarTarefasPage)
  },


];

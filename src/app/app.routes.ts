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
  {
    path: 'contar-prioridade',
    loadComponent: () => import('./contar-prioridade/contar-prioridade.page').then( m => m.ContarPrioridadePage)
  },
  {
    path: 'listar-produtos',
    loadComponent: () => import('./listar-produtos/listar-produtos.page').then( m => m.ListarProdutosPage)
  },
  {
    path: 'listar-tarefas',
    loadComponent: () => import('./listar-tarefas/listar-tarefas.page').then( m => m.ListarTarefasPage)
  },
  {
    path: 'cadastrar-produto',
    loadComponent: () => import('./cadastrar-produto/cadastrar-produto.page').then( m => m.CadastrarProdutoPage)
  },
  {
    path: 'concluir-tarefa',
    loadComponent: () => import('./concluir-tarefa/concluir-tarefa.page').then( m => m.ConcluirTarefaPage)
  },


];

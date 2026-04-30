import { Produto } from "./desafio2/desafio2.page";
import { Tarefa } from "./desafio2/desafio2.page";

export function calcularTotalEstoque(): string {
    let produtos: Produto[] = JSON.parse(localStorage.getItem('produtos') || '[]');
    let total = 0;
    produtos.forEach(p => {
        total += (p.preco * p.estoque);
    });
    let totalFormatado = total + ",00 reais";
    return totalFormatado;
};

export function contarPorPrioridade(): [number, number, number] { 
   let alta = 0;
   let media = 0;
   let baixa = 0;
   let tarefas: Tarefa[] = JSON.parse(localStorage.getItem('tarefas') || '[]');
   tarefas.forEach(t => { 
       if (t.prioridade === "alta") 
           (alta += 1); 
       if (t.prioridade === "média") 
           (media += 1); 
       if (t.prioridade === "baixa") 
           (baixa += 1);       
   }) 
   return [alta, media, baixa];
};

export function filtrarTarefas(): [Tarefa[], Tarefa[]] {
    let concluidas: Tarefa[] = [];
    let pendentes: Tarefa[] = [];
    let tarefas: Tarefa[] = JSON.parse(localStorage.getItem('tarefas') || '[]');
    tarefas.forEach(t => { 
        if (t.concluida) 
           (concluidas.push(t)) 
   })
   tarefas.forEach(t => { 
       if (!t.concluida) 
           (pendentes.push(t)) 
   }) 
   return [concluidas, pendentes];
};

export function formatarPreco(id?: number): string {
    let precoFormatado: string = '';
    if (id !== undefined) {
      const produtos: Produto[] = JSON.parse(localStorage.getItem('produtos') || '[]');
      produtos.forEach(p => {
        if (p.id === id) {
          precoFormatado = "R$ " + p.preco + ",00";
        }
      });
    }
    return precoFormatado;
};

export function salvarDados(produtos: Produto[], tarefas: Tarefa[]): void {
    localStorage.setItem('produtos', JSON.stringify(produtos));
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }
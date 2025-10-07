import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ItemLista } from './itemLista';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.scss',
})
export class ListaCompras {
  lista: ItemLista[] = [];
  item: string = '';

  adicionarItem() {
    const nome = this.item.trim();
    if (!nome) {
      alert('Preencha o campo para adicionar na lista!');
      this.item = '';
      return;
    }

    const jaExiste = this.lista.some((item) => item.nome?.toLowerCase() === nome.toLowerCase());

    if (jaExiste) {
      alert('Este item já está na lista!');
      this.item = '';
      return;
    }

    const novoItem = new ItemLista();
    novoItem.nome = nome;
    novoItem.id = this.lista.length + 1;

    this.lista.push(novoItem);
    this.item = '';
  }

  riscarItem(itemLista: ItemLista) {
    itemLista.comprado = !itemLista.comprado;
  }

  limparLista() {
    this.lista = [];
  }
}

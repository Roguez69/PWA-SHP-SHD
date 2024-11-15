import { Component } from '@angular/core';
import { ListaCompraService } from '../Services/lista-compra.service';

@Component({
  selector: 'app-compra-lista',
  templateUrl: './compra-lista.component.html',
  styleUrl: './compra-lista.component.css'
})
export class CompraListaComponent {

  items: string[] = [];

  constructor(private shoppingListService: ListaCompraService) {
    this.items = this.shoppingListService.getItems();
  }

  addItem(item: string): void {
    if (item.trim()) {
      this.shoppingListService.addItem(item.trim());
      this.items = this.shoppingListService.getItems();
    }
  }

  removeItem(index: number): void {
    this.shoppingListService.removeItem(index);
    this.items = this.shoppingListService.getItems();
  }
}

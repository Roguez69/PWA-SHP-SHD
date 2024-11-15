import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaCompraService {

  private items: string[] = [];

  constructor() {
    if (this.isLocalStorageAvailable()) {
      const storedItems = localStorage.getItem('shopping-list');
      if (storedItems) {
        this.items = JSON.parse(storedItems);
      }
    }
  }

  getItems(): string[] {
    return this.items;
  }

  addItem(item: string): void {
    this.items.push(item);
    this.saveToLocalStorage();
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('shopping-list', JSON.stringify(this.items));
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, 'test');
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      console.warn('localStorage is not available:', e);
      return false;
    }
  }
}

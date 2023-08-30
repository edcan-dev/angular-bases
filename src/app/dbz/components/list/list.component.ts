import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Array<Character>;
  @Output()
  onDelete: EventEmitter<string>;

  constructor() {
    this.characterList = [];
    this.onDelete = new EventEmitter();
  }

  emitDeleteCharacter(id?: string): void {
    if(!id) return;
    this.onDelete.emit(id);
  }
}

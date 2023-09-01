import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-item-task',
  templateUrl: './item-task.component.html',
  styleUrls: ['./item-task.component.css']
})
export class ItemTaskComponent {
  @Input() task?: Task;

  @Output() accionBotonEliminar = new EventEmitter();
  @Output() accionBotonEditar = new EventEmitter();
  @Output() accionBotonConfirmar = new EventEmitter();

  editar() {
    this.accionBotonEditar.emit();
  }

  eliminar() {
    this.accionBotonEliminar.emit();
  }

  confirmar() {
    this.accionBotonConfirmar.emit();
  }
}

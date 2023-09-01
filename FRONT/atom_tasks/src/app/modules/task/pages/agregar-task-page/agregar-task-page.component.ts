import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Estado, Task } from '../../interfaces/task.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/core/services/toast.service';
import { TaskService } from '../../services/task.service';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-agregar-task-page',
  templateUrl: './agregar-task-page.component.html',
  styleUrls: ['./agregar-task-page.component.css'],
})
export class AgregarTaskPageComponent {
  @Input() task?: Task;
  @Output() cerrarModal = new EventEmitter();

  formTask: FormGroup = this.fb.group({
    descripcion: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
    private taskService: TaskService,
    private loadingService: LoadingService
  ) {}

  validarCampos(campo: string) {
    return (
      this.formTask.controls[campo].errors &&
      this.formTask.controls[campo].touched
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.task) {
      this.cargarInfoTask();
    }
  }

  cargarInfoTask() {
    const { descripcion } = this.task!;
    this.formTask.controls['descripcion'].setValue(descripcion);
  }

  ngOnDestroy() {
    this.cerrarModal.unsubscribe();
  }

  cancelar() {
    this.formTask.reset();
    this.cerrarModal.emit(false);
  }

  async guardar() {
    this.formTask.markAllAsTouched();

    if (this.formTask.invalid) {
      this.toastService.mostrarToastError('Campos vacíos o inválidos');
      return;
    }

    this.loadingService.show();

    let taskTemp: Task = {
      descripcion: this.formTask.controls['descripcion'].value,
      estado: Estado.Pendiente
    };

    if (this.task) {
      // Editar
      this.taskService.updateTask(this.task.id!, taskTemp).subscribe({
        next: (value) => {
          this.toastService.mostrarToastSuccess('Actualizado exitosamente');
          this.cancelar();
        },
        error: (err) => {
          console.log('Error', err.error);
          this.toastService.mostrarToastError('Problemas al guardar la tarea');
        },
      });
    } else {
      // Crear
      this.taskService.insertTask(taskTemp).subscribe({
        next: (value) => {
          this.toastService.mostrarToastSuccess('Guardado exitosamente');
          this.cancelar();
        },
        error: (err) => {
          console.log('Error', err.error);
          this.toastService.mostrarToastError('Problemas al guardar la tarea');
        },
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Estado, Task } from '../../interfaces/task.interface';
import { LoadingService } from '../../../../core/services/loading.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css'],
})
export class TaskPageComponent implements OnInit {
  public tasksPendientes: Task[] = [];
  public tasksCompletos: Task[] = [];
  tituloDialog: string = "Nueva Tarea";
  displayAgregar: boolean = false;
  itemSeleccionado: any;

  constructor(
    private taskService: TaskService,
    private toastService: ToastService,
    private loadingService: LoadingService
    ) {}

  ngOnInit(): void {
    this.consultarTasks();
  }

  consultarTasks() {
    this.loadingService.show();
    this.taskService
      .getAllTasks()
      .subscribe((tasks) => {
        this.tasksPendientes = tasks.filter(x => x.estado == 'P');
        this.tasksCompletos = tasks.filter(x => x.estado == 'C');
        this.loadingService.hide();
      });
  }

  eliminarTask( index: number ) {
    this.loadingService.show();
    const task: Task = this.tasksPendientes[index];
    this.taskService.deleteTask(task.id!).subscribe((resp) => {
      this.toastService.mostrarToastSuccess('Tarea eliminada exitosamente');
      this.consultarTasks();
    });
  }

  editarTask( index: number ) {
    const task: Task = this.tasksPendientes[index];

    this.itemSeleccionado = task;
    this.showDialogAgregar(this.itemSeleccionado);
    // this.taskService.updateTask(task.id!, { descripcion: '' }).subscribe();
  }

  confirmarTask( index: number ) {
    this.loadingService.show();
    const task: Task = this.tasksPendientes[index];

    this.taskService.updateTask(task.id!, { estado: Estado.Completado }).subscribe((resp) => {
      this.toastService.mostrarToastSuccess('Tarea completada');
      this.consultarTasks()
    });
  }

  //Agregar
  showDialogAgregar( ev?: any ) {
    if(ev) {
      this.tituloDialog = "Actualizar Tarea";
    } else {
      this.tituloDialog = "Nueva Tarea";
    }
    this.displayAgregar = true;
    this.itemSeleccionado = ev;
  }

  //Cerrar dialogo
  cerrarDialogAgregar() {
    this.consultarTasks();
    this.displayAgregar = false;
  }
}

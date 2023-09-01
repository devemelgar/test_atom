import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environments } from 'src/environments/environments';
import { Task } from '../interfaces/task.interface';
import { IResponse } from '../../../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<IResponse<Task[]>>(`${ this.baseUrl }/tasks`)
    .pipe(
      map( resp => resp.data ),
      catchError( err => of(err.error) )
    );
  }

  insertTask(task: Task) {
    return this.http.post<IResponse<any>>(`${ this.baseUrl }/tasks`, task);
  }

  updateTask(idTask: string, task: Task) {
    return this.http.put<IResponse<any>>(`${ this.baseUrl }/tasks/${idTask}`, task);
  }

  deleteTask(idTask: string) {
    return this.http.delete<IResponse<any>>(`${ this.baseUrl }/tasks/${idTask}`);
  }
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css']
})
export class PrincipalPageComponent {
  blockedDocument$: Observable<boolean> = this.loader.loading$;

  constructor(
    public loader: LoadingService
  ) {}
}

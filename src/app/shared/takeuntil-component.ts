import { OnDestroy, Injectable } from '@angular/core';
import { pipe, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

// use this to unsubscribe to observables
export abstract class TakeUntilComponent implements OnDestroy {
  onDestroySubject$ = new Subject<boolean>();

  takeUntilDestroyed<T>(): any {
    return pipe(
      map((data: T) => data),
      takeUntil(this.onDestroySubject$)
    );
  }

  ngOnDestroy(): void {
    this.onDestroySubject$.next(true);
    this.onDestroySubject$.complete();
  }
}

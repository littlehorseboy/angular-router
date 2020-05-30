import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Crisis } from './crisis';
import { MessageService } from '../message.service';

const CRISES: Crisis[] = [
  { id: 1, name: 'Dragon Burning Cities' },
  { id: 2, name: 'Sky Rains Great White Sharks' },
  { id: 3, name: 'Giant Asteroid Heading For Earth' },
  { id: 4, name: 'Procrastinators Meeting Delayed Again' },
];

@Injectable({
  providedIn: 'root'
})
export class CrisisService {

  constructor(
    private messageService: MessageService,
  ) { }

  getCrises(): Observable<Crisis[]> {
    this.messageService.add('CrisisService: fetched crises');
    return of(CRISES);
  }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      map((crises: Crisis[]) => crises.find((crisis) => crisis.id === +id)),
    );
  }
}

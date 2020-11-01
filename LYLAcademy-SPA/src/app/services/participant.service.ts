import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Participant } from '../models/Participant';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root',
})
export class ParticipantService {
  constructor(
    private httpClient: HttpClient,
    private alertifyService: AlertifyService,
    private router: Router
  ) {}

  path = 'https://localhost:44378/api/';

  getParticipants(): Observable<Participant[]> {
    return this.httpClient.get<Participant[]>(this.path + 'participants');
  }
  getParticipantById(participantId): Observable<Participant> {
    return this.httpClient.get<Participant>(this.path + 'participants/' + participantId);
  }

  add(participant) {
    this.httpClient.post(this.path + 'participants', participant).subscribe((data) => {
      this.alertifyService.success('Participant creation is successful!');
      this.router.navigateByUrl('/participant');
    });
  }

  save(participant){
    this.httpClient.put(this.path + 'participants/'+participant.participantId,participant).subscribe((data) => { 
      this.router.navigateByUrl('/participant');
      this.alertifyService.success('participant updated!');
    },
    (error) => {
        this.alertifyService.notify('Update process  failed.'+error, 'error');
      
    });
  }
  delete(participantId){
    return this.httpClient.delete(this.path + 'participants/'+participantId);
  }
}
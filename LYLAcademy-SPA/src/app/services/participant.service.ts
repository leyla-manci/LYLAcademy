import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Participant } from '../models/Participant';
import { ParticipantAdd } from '../models/ParticipantAdd';
import { AlertifyService } from './alertify.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ParticipantService {
  constructor(
    private httpClient: HttpClient,
    private alertifyService: AlertifyService,
    private router: Router
  ) {}

  //path = 'https://localhost:44378/api/';
  path = environment.baseUrl + '/';

  getParticipants(): Observable<Participant[]> {
    return this.httpClient.get<Participant[]>(this.path + 'participants');
  }
  getParticipantById(participantId): Observable<Participant> {
    return this.httpClient.get<Participant>(this.path + 'participants/' + participantId);
  }

  add(participant:ParticipantAdd):Observable<Participant> {
   return this.httpClient.post<Participant>(this.path + 'participants', participant);
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
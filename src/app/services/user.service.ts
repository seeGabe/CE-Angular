import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _apiSvc: ApiService) {}

  public async getMembersData(): Promise<void> {
    return await this._apiSvc.get({ url: 'orgs/Crestron/public_members' });
  }

  public async getEventsData(login: string): Promise<void> {
    return await this._apiSvc.get({ url: `users/${login}/events` });
  }
}

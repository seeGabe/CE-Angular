import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class OrgService {
  constructor(private _apiSvc: ApiService) {}

  public async getOrgData(): Promise<void> {
    return await this._apiSvc.get({ url: 'orgs/Crestron' });
  }

  public async getRepoData(): Promise<void> {
    return await this._apiSvc.get({ url: 'orgs/Crestron/repos' });
  }

  public async getProjectData(name: string, dataPath?: string): Promise<void> {
    return await this._apiSvc.get({ url: `repos/Crestron/${name}` });
  }
  public async getCommitData(name: string, dataPath?: string): Promise<void> {
    return await this._apiSvc.get({ url: `repos/Crestron/${name}/commits` });
  }
  public async getEventData(name: string, dataPath?: string): Promise<void> {
    return await this._apiSvc.get({ url: `repos/Crestron/${name}/events` });
  }
}

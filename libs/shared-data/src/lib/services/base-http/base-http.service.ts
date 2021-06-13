import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiPath } from '../../enums/api-paths/api-path.enum';

export abstract class BaseHttpService {

  public set apiUrl(value: string) {
    this._apiUrl = value;
  }

  public get apiUrl(): string {
    return this._apiUrl;
  }

  private _apiUrl: string;

  protected constructor(protected http: HttpClient) {
  }

  private setURl(partial: string): string {
    return `${this.apiUrl}/${partial}`;
  }

  public _get<T>(apiPath: ApiPath, id?: number): Observable<T> {
    const url = id ?
      this.setURl(`${apiPath}/${id}`) :
      this.setURl(`${apiPath}`);
    return this.http.get<T>(url);
  }

  public _put<T>(apiPath: ApiPath, id: number, body: T): Observable<T> {
    const url = this.setURl(`${apiPath}/${id}`);
    return this.http.put<T>(url, body);
  }

  public _post<T>(apiPath: ApiPath, body: T): Observable<T> {
    const url = this.setURl(apiPath);
    return this.http.post<T>(url, body);
  }

  public _delete<T>(apiPath: ApiPath, id: number): Observable<T> {
    const url = this.setURl(`${apiPath}/${id}`);
    return this.http.delete<T>(url);
  }
}

import { Component } from '@angular/core';
import {Person} from "./themagiccomponent/Person";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testformgroups';

  public persons: Person[] = Array(new Person('Savran Taha', 18, 'savrantaha@hotmail.com'));

  constructor(private http: HttpClient) {
  }

  public addUser(): void {
    this.persons.push(new Person('', 18, 'example@tahayasin.be'));
  }

  public commit(): void {
    const headers = new HttpHeaders({
      someMagicBaererHeaders: 'Laat me gewoon in'
    });

    this.http.post('Een post ofzo', this.persons, { headers }).subscribe((result: any) => {
      console.info('Euhh nee da kan ni');
    }, (error: any) => {
      console.error(error);
    })
  }
}

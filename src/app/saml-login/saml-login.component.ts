import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-saml-login',
  templateUrl: './saml-login.component.html',
  styleUrls: ['./saml-login.component.css']
})
export class SamlLoginComponent implements OnInit {
  private token: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getToken(loginResponse: any) {
    const body: any = {
      grant_type: 'saml20',
      assertion: btoa(loginResponse)
    };
    const httpOptions: any = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post('http://localhost:25009/CineNet/Authorization/Token', body, httpOptions)
      .subscribe((token: any) => {
        this.token = token;
        // this.redirectEndpoint();
      });
  }
}

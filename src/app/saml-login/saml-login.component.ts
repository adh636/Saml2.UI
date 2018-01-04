import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saml-login',
  templateUrl: './saml-login.component.html',
  styleUrls: ['./saml-login.component.css']
})
export class SamlLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

//   $(document).ready(function () {
//   console.log("Document Ready");
//   $('#login').click(function () {
//     console.log('Login button clicked');
//     var username = $('#username').val();
//     var password = $('#password').val();
//     console.log('Username := ' + username);
//     console.log('Password := ' + password);
//     var loginRequest = {
//       Username: username,
//       Password: password
//     };
//     $.ajax({
//       type: "POST",
//       url: 'http://localhost:25008/CineNet/IdentityProvider/Login',
//       contentType: 'application/json; charset=UTF-8',
//       data: JSON.stringify(loginRequest)
//     }).done(function(response){
//       console.log('Login Response done');
//       console.log(response);
//       $('#samlResponse').html(response);
//       getToken(response);
//     });
//   });
//   function getToken(samlResponse) {
//     var body = {
//       grant_type: 'saml20',
//       assertion: btoa(samlResponse)
//     };
//     $.ajax({
//       type: "POST",
//       url: 'http://localhost:25009/CineNet/Authorization/Token',
//       contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
//       data: body
//     }).done(function(token){
//       $('#authorizationToken').text(JSON.stringify(token));
//     });
//   }
// });

}

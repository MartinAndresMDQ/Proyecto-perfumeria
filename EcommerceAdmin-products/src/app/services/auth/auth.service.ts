import { API_LOGIN_URL } from './../../constants/enpoints';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserLoginResponseFromApi } from '../../models/user.interface';

export const TOKEN = 'token';
export const REFRESH_TOKEN = 'refreshToken';
export const EXPIRES = 'expires';
export const USER_ID = 'userId';
export const EMAIL_FIELD = 'email';

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

declare var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // constructor(private httpClient: HttpClient) {
  // }

  // public getToken(): string {
  //   return localStorage.getItem(TOKEN);
  // }

  // public setToken(userData: UserLoginResponseFromApi) {
  //   // localStorage.setItem(TOKEN, userData.token);
  //   localStorage.setItem(REFRESH_TOKEN, userData.refreshToken);
  //   localStorage.setItem(EXPIRES, userData.expires);
  //   localStorage.setItem(USER_ID, userData.userId);
  //   localStorage.setItem(EMAIL_FIELD, userData.email);
  // }

  // public getTokenExpirationDate(): number {
  //   const validTo = localStorage.getItem(EXPIRES);
  //   return Date.parse(validTo);
  // }
  // public isTokenExpired(): boolean {
  // }
  // public isTokenExpired(): boolean {
  //   const token = this.getToken();
  //   const date = this.getTokenExpirationDate();

  //   if (!token || date === undefined) return true;

  //   return date.valueOf() < new Date().valueOf();
  // }

  public removeTokens(): void {
    // localStorage.removeItem(TOKEN);
    // localStorage.removeItem(REFRESH_TOKEN);
    // localStorage.removeItem(EXPIRES);
    // localStorage.removeItem(USER_ID);
    // localStorage.removeItem(EMAIL_FIELD);
    this.userG = null;
  }

  // public getUserId(): string {
  //   return localStorage.getItem(USER_ID);
  // }

  // public login(email: string, password: string): Observable<any> {
  //   const data = {email, password};
  //   const options = this.setupOptions();

  //   return this.httpClient.post(API_LOGIN_URL, data, options);
  // }

  // private setupOptions(): any {
  //   const options = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   };

  //   return options;
  // }
  public user: Observable<firebase.User>;
  public userG: firebase.User;
  calendarItems: any[] = [];

  refresh: Subject<any> = new Subject();

  constructor(public afAuth: AngularFireAuth) {
    // this.initClient();
    this.user = afAuth.authState;
    console.log(this.user)
  }

  // getToken() {
  //   this.afAuth.auth.currentUser.getIdToken()
  //     .then((idToken) => {
  //       localStorage.setItem(TOKEN, idToken);
  //     })
  //     .catch((error) => {
  //       // Error occurred.
  //     });
  // }
  loginEmail(user, pass) {
    return this.afAuth.auth.signInWithEmailAndPassword(user, pass).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;

    });
  }

  async login() {
    const googleAuth = gapi.auth2.getAuthInstance()
    const googleUser = await googleAuth.signIn();

    const token = googleUser.getAuthResponse().id_token;

    console.log(googleUser)

    const credential = auth.GoogleAuthProvider.credential(token);

    await this.afAuth.auth.signInAndRetrieveDataWithCredential(credential);


    // Alternative approach, use the Firebase login with scopes and make RESTful API calls

    // const provider = new auth.GoogleAuthProvider()
    // provider.addScope('https://www.googleapis.com/auth/calendar');

    // this.afAuth.auth.signInWithPopup(provider)

  }
  logout() {
    this.afAuth.auth.signOut();
    this.userG = null;
  }

}

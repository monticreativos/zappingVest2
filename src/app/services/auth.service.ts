import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { AuthConstants } from 'config/auth-constants';
import { Storage } from  '@ionic/storage';
import { NavController } from '@ionic/angular';

@Injectable({
providedIn: 'root'
})
  export class AuthService {
  userData$ = new BehaviorSubject<any>([]);

  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router,
    private localStorage: Storage,
    private navCtrl: NavController
  ) {}

  getUserData() {
    this.storageService.get('access_token').then(res => {
      this.userData$.next(res);
    });
  }

  login(postData: any): Observable<any> {
    return this.httpService.auth('login', postData);
  }

  getUser(): Observable<any>{
    let token = window.localStorage.getItem('access_token');
    return this.httpService.get('user', token);
  }

  getAllCategories(): Observable<any>{
    let token = window.localStorage.getItem('access_token');
    return this.httpService.get('getAllCategories', token);
  }

  /******/ 
  getPartner(data: any): Observable<any>{
    let token = window.localStorage.getItem('access_token');
    return this.httpService.post('getPartner', data, token);
  }

  /******/ 
  getDetailsPartner(idPartner: any): Observable<any>{
    let token = window.localStorage.getItem('access_token');
    return this.httpService.post('getDetailsPartner', idPartner, token);
  }

  saveTicket(formData: any) {
    let token = window.localStorage.getItem('access_token');
    return this.httpService.post('saveTicket', formData, token);
  }

  /******/ 
  getAllPartners(data: any): Observable <any>{
    let token = window.localStorage.getItem('access_token');
    return this.httpService.post('getAllPartners', data, token);
  }

  getAllNotifications(): Observable <any>{
    let token = window.localStorage.getItem('access_token');
    return this.httpService.get('getAllNotifications', token);
  }

  getAllNotificationsByCs(): Observable <any>{
    let token = window.localStorage.getItem('access_token');
    return this.httpService.get('getAllNotificationsByCs', token);
  }

  getAllNotificationsByCb(): Observable <any>{
    let token = window.localStorage.getItem('access_token');
    return this.httpService.get('getAllNotificationsByCb', token);
  }

  getFriendsValidates(idUser: any): Observable <any>{
    let token = window.localStorage.getItem('access_token');
    return this.httpService.post('getFriendsValidates', idUser, token);
  }

  inviteFriend(formData: any): Observable <any>{
    let token = window.localStorage.getItem('access_token');
    return this.httpService.post('inviteFriend', formData, token);
  }

  getSaving(idUser: any): Observable <any>{
    let token = window.localStorage.getItem('access_token');
    return this.httpService.post('getSaving', idUser, token);
  }

  getSavingTotal(idUser: any): Observable <any>{
    let token = window.localStorage.getItem('access_token');
    return this.httpService.post('getSavingTotal', idUser, token);
  }

  getPointsSave(idUser: any): Observable <any>{
    let token = window.localStorage.getItem('access_token');
    return this.httpService.post('getPointsSave', idUser, token);
  }

  updatePicProfile(formData: any) {
    let token = window.localStorage.getItem('access_token');
    return this.httpService.post('updatePicProfile', formData, token);
  }

  changeLocationCb(formData: any){
    let token = window.localStorage.getItem('access_token');
    return this.httpService.post('changeLocationCostaBlanca', formData, token);
  }

  changeLocationCs(formData: any){
    let token = window.localStorage.getItem('access_token');
    return this.httpService.post('changeLocationCostaDelSol', formData, token);
  }

  logout() {
    this.storageService.removeStorageItem("access_token").then(res => {
      this.userData$.next('');

      localStorage.clear();
      window.localStorage.clear();
      window.localStorage.removeItem("access_token");
      window.localStorage.removeItem("id_user");
      window.localStorage.removeItem("login");
      window.localStorage.removeItem("location");

      this.navCtrl.navigateRoot('/login', { animated: true, animationDirection: 'forward' });
    });
  }


  /****************** CALLS OVERVIEW APP WITHOUT TOKENS *******************/


  getOverViewAllCategories(lng: any): Observable<any>{
    return this.httpService.postCallApiOverView('getCategoriesOverView', lng);
  }

  getOverViewsDetailsPartnerCds(idPartner: any): Observable<any>{
    return this.httpService.postCallApiOverView('getDetailsPartnerOverViewCds', idPartner);
  }

  getOverViewPartnerCds(idCategory: any): Observable<any>{
    return this.httpService.postCallApiOverView('getPartnerOverViewCds', idCategory);
  }

  /******** *************/
  getPartnerOverViewCb(idPartner: any): Observable<any>{
    return this.httpService.postCallApiOverView('getPartnerOverViewCb', idPartner);
  }

  getDetailsPartnerOverViewCb(idCategory: any): Observable<any>{
    return this.httpService.postCallApiOverView('getDetailsPartnerOverViewCb', idCategory);
  }

}
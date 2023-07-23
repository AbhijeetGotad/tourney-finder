import { Injectable } from '@angular/core';
import { Config } from '../../../../core/config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  public captureTenantId = new BehaviorSubject<any>('');
  public captureOriginDetails = new BehaviorSubject<any>([]);
  public captureStatusFlag = new BehaviorSubject<string>('');
  private baseUrl: string = Config.baseUrl;
  private signUpURL: string = this.baseUrl + 'login-i/';
  private logoutURL: string = this.baseUrl + 'login-i/logout';
  private getTenantDetURL: string = this.baseUrl + 'login-i/tenant';
  private searchEmpURL: string = this.baseUrl + 'search/elasticSearch';
  private checkAdminFlagsURL: string =
    this.baseUrl + 'jf3-home-i/adminSignUpAndCompletion';
  private getRecentHistoryURL: string =
    this.baseUrl + 'jf3-home-i/getRecentSearch';
  private getOriginURL: string = this.baseUrl + 'jf3-home-i/getLocationDetails';
  private getFilterValURL: string = this.baseUrl + 'jf3-home-i/filteredSearch';
  private saveRecentURL: string = this.baseUrl + 'jf3-home-i/saveRecentSearch';
  private clearRecentSearchURL: string =
    this.baseUrl + 'jf3-home-i/clearRecentSearch';

  private BASE_URL: any = this.baseUrl + 'jct-login-i';
  private CampaignUrl: string = this.baseUrl + 'jct-campaign-i/';
  tenantId: any = '';
  employeeCode: any = '';
  employeeName: any = '';
  chartLineContent!: boolean;
  firstTimeTenantSet: boolean = false;
  isSignUp: boolean = false;

  setTenantData(data: any) {
    this.captureTenantId.next(data);
  }

  setOriginData(data: any) {
    this.captureOriginDetails.next(data);
  }

  setStatusFlag(data: any) {
    this.captureStatusFlag.next(data);
  }

  constructor(private http: HttpClient) {}

  organisationList() {
    return this.http.get(this.signUpURL + 'getOrgListSignUp');
  }

  checkUserDetailsExist(payload: any) {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   }),
    // };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),

      withCredentials: true,
      observe: 'response' as 'response',
    };
    return this.http.post(
      this.signUpURL + 'checkUserDetailsExist',
      payload,
      httpOptions
    );
  }
  registerUser(payload: any) {
    return this.http.post(this.signUpURL + 'registerUser', payload);
  }

  getTenantIdData() {
    return this.http.get(this.getTenantDetURL);
  }

  logout() {
    return this.http.get(this.logoutURL);
  }

  searchEmp(payload: any) {
    return this.http.post(this.searchEmpURL, payload);
  }

  checkAdminCompletion(tenant: any) {
    let payload = {
      tenantId: tenant,
    };
    return this.http.post(this.checkAdminFlagsURL, payload);
  }

  getRecentHistoryData(tenant: any, name: string) {
    let payload = {
      tenantId: tenant,
      limit: 10,
      page: 1,
      createdBy: name,
    };
    return this.http.post(this.getRecentHistoryURL, payload);
  }

  getOriginData(tenant: any) {
    let payload = {
      tenantId: tenant,
    };
    return this.http.post(this.getOriginURL, payload);
  }

  getFilterValData(tenant: any) {
    let payload = {
      tenantId: tenant,
    };
    return this.http.post(this.getFilterValURL, payload);
  }

  saveRecentSearch(payload: any) {
    return this.http.post(this.saveRecentURL, payload);
  }
  clearRecenSearches(tenant: any) {
    let payload = {
      tenantId: tenant,
    };
    return this.http.post(this.clearRecentSearchURL, payload);
  }

  sendOTP(payload: any) {
    return this.http.post(this.BASE_URL + '/sendOTP', payload);
  }

  validateOTP(payload: any) {
    return this.http.post(this.BASE_URL + '/verifyEmailOTPSignUp', payload);
  }
  getOnboarding(journeyId: string) {
    journeyId = journeyId ? '?journeyId=' + journeyId.toString() : '';
    return this.http.get(this.CampaignUrl + 'getOnboardingDetails' + journeyId);
  }
}

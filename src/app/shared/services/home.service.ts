import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  http = inject(HttpClient);

  getNews() {
    return this.http.get<any>('https://real-time-news-data.p.rapidapi.com/topic-news-by-section?topic=TECHNOLOGY&section=CAQiSkNCQVNNUW9JTDIwdk1EZGpNWFlTQldWdUxVZENHZ0pKVENJT0NBUWFDZ29JTDIwdk1ETnliSFFxQ2hJSUwyMHZNRE55YkhRb0FBKi4IACoqCAoiJENCQVNGUW9JTDIwdk1EZGpNWFlTQldWdUxVZENHZ0pKVENnQVABUAE&limit=10&country=US&lang=en',{
      headers: {
        'x-rapidapi-key': environment.rapidApiKey,
        'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com'
      }
    })
  }

  getApps() {
    return this.http.get<any>('https://localhost:7101/appApi/AppsAPI/Trending',{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  }

  getAllApps() {
    return this.http.get<any>('https://localhost:7101/appApi/AppsAPI',{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  }

  getAssociateDetails() {
    const useremail = JSON.parse(sessionStorage.getItem('loggedInUser')!).email;
    return this.http.get<any>(`https://localhost:7102/profileApi/ProfilesAPI/GetByEmail/${encodeURIComponent(useremail)}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  }

  // This method is used to get associate details at the time of Login
  getAssociateDetailsByEmail(email : string) {
    return this.http.get<any>(`https://localhost:7102/profileApi/ProfilesAPI/GetByEmail/${encodeURIComponent(email)}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  }

  getHolidays() {
    const userCity = JSON.parse(sessionStorage.getItem('loggedInUser')!).associateCity;
    return this.http.get<any>(`https://localhost:7103/holidayLeaveApi/HolidaysAPI/GetByCity/${encodeURIComponent(userCity)}`,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  }

  getLeaves() {
    const userId = JSON.parse(sessionStorage.getItem('loggedInUser')!).associateId;
    return this.http.get<any>(`https://localhost:7103/holidayLeaveApi/LeavesAPI/GetByAssociate/${encodeURIComponent(userId)}`,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  }

}

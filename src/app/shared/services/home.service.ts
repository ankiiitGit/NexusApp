import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

// const options = {
//   params: {
//     include_adult: 'false',
//     include_video: 'true',
//     language: 'en-US',
//     page: '1',
//     sort_by: 'popularity.desc'
//   },
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGExNTM3NGIxMDcyODlhNzZiOGFmNGZhY2FkZmNhZiIsInN1YiI6IjYwYzhkZDQ0Y2E4MzU0MDAyOTk1OTYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R9ZhfiS3W_OueoH1NHoOu1kVT-cuNqHgDewH7ve5MIs'
//   }
// }

const options = {
	method: 'GET',
	hostname: 'google-search-master-mega.p.rapidapi.com',
	port: null,
	path: '/videos?q=Apple%20watch%20review&gl=us&hl=en&autocorrect=true&num=10&page=1',
	headers: {
		'x-rapidapi-key': 'e2ff00934bmshcc64357492b2b9cp12908djsne4b117b1361a',
		'x-rapidapi-host': 'google-search-master-mega.p.rapidapi.com'
	}
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  http = inject(HttpClient);

  getNews() { 
    return this.http.get<any>('https://real-time-news-data.p.rapidapi.com/topic-news-by-section?topic=TECHNOLOGY&section=CAQiSkNCQVNNUW9JTDIwdk1EZGpNWFlTQldWdUxVZENHZ0pKVENJT0NBUWFDZ29JTDIwdk1ETnliSFFxQ2hJSUwyMHZNRE55YkhRb0FBKi4IACoqCAoiJENCQVNGUW9JTDIwdk1EZGpNWFlTQldWdUxVZENHZ0pKVENnQVABUAE&limit=10&country=US&lang=en',{
      headers: {
        'x-rapidapi-key': 'e2ff00934bmshcc64357492b2b9cp12908djsne4b117b1361a',
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
    // .pipe(
    //   // Use RxJS map to extract the arrays from the results object
    //   map((response: any) => response.results)
    // );
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

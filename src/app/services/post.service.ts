import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface Post {
  id?: string;
  pill?: string;
  deposit?: string;
  weight?: string;
  morning?: boolean;
  image?: {
    formats: {
      small: {
        url: string;
      };
    };
  };
}

export interface Post2 {
  id?: string;
  monday?: boolean;
    tuesday?: boolean;
    wednesday?: boolean;
    thursday?: boolean;
    friday?: boolean;
    saturday?: boolean;
    sunday?: boolean;
}

@Injectable({
  providedIn: "root",
})

export class PostService {
  constructor(private http: HttpClient) {}

  API = 'http://localhost:1337/pills';
  API2= 'http://localhost:1337/schedules';

  getPosts() {
    return this.http.get<Post[]>(this.API);
  }

  createPost(pill: string, deposit: string, weight: string) {
    return this.http.post<Post[]>(this.API, {
      pill,
      deposit,
      weight,
    });
  }

  updateMorning(id: number, post: Post){
    return this.http.put<Post>(`${this.API}/${id}`, post);
  }

  createSchedule(monday: boolean, tuesday: boolean, wednesday: boolean, thursday: boolean, friday: boolean, saturday: boolean, sunday: boolean) {
    
    return this.http.post<Post2[]>(this.API2, {
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
    });
  }

  removePost(id: string) {
    return this.http.delete<Post>(`${this.API}/${id}`);
  }

  getPostById(id: string) {
    return this.http.get<Post>(`${this.API}/${id}`);
  }

  getPostById2(id: string) {
    return this.http.get<Post2>(`${this.API2}/${id}`);
  }


  updatePost(id: string, post: Post) {
    return this.http.put(`${this.API}/${id}`, post);
  }

  updateSchedule(id2: string, post: Post2) {
    return this.http.put(`${this.API2}/${id2}`, post);
  }
}

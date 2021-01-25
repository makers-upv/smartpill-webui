import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface Post {
  id?: string;
  pill?: string;
  deposit?: string;
  weight?: string;
  morning?: boolean;
  afternoon?:boolean;
  night?:boolean;
  image?: {
    formats: {
      small: {
        url: string;
      };
    };
  };
}

export interface Log {
  pills: string;
  date: any;
  time: string;
  id: string;
  patient_name: string;
}

export interface Dep {
n1: boolean,
n2: boolean,
n3: boolean,
n4: boolean,
}

@Injectable({
  providedIn: "root",
})

export class PostService {
  constructor(private http: HttpClient) {}

  API = 'http://localhost:1337/pills';
  DEPOSIT = 'http://localhost:1337/deposit';
  LOGS = 'http://localhost:1337/logs';

  getPosts() {
    return this.http.get<Post[]>(this.API);
  }

  getDeposit() {
    return this.http.get<Dep[]>(this.DEPOSIT);
  }

  
  getLogs(){
    return this.http.get<Log[]>(this.LOGS);
  }

  createPost(pill: string, deposit: string, weight: string, morning: boolean, afternoon: boolean, night: boolean) {
    return this.http.post<Post[]>(this.API, {
      pill,
      deposit,
      weight,
      morning,
      afternoon,
      night,
    });
  }

  removePost(id: string) {
    return this.http.delete<Post>(`${this.API}/${id}`);
  }

  getPostById(id: string) {
    return this.http.get<Post>(`${this.API}/${id}`);
  }

  updatePost(id: string, post: Post) {
    return this.http.put(`${this.API}/${id}`, post);
  }

}

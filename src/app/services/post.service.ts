import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface Post {
  id?: string;
  pill: string;
  deposit?: string;
  weight: string;
  image?: {
    formats: {
      small: {
        url: string;
      };
    };
  };
}

@Injectable({
  providedIn: "root",
})

export class PostService {
  constructor(private http: HttpClient) {}

  API = 'http://localhost:1337/pills';

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

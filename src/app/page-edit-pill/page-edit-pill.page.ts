import { Component, OnInit } from "@angular/core";
import { PostService, Post } from "../services/post.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-page-edit-pill',
  templateUrl: './page-edit-pill.page.html',
  styleUrls: ['./page-edit-pill.page.scss'],
})

export class PageEditPillPage implements OnInit {
  post: Post = {
    pill: "",
    deposit: "",
    weight: "",
    morning: null,
    afternoon: null,
    night: null,
  };

  time: string []=[]

  editing = false;

  constructor(
    private postService: PostService,
    private router: Router,
    private actiavtedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.actiavtedRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get("postId")) {
        this.postService
          .getPostById(paramMap.get("postId"))
          .subscribe((res) => {
            this.post = res;
            this.editing = true;
          });
      }
    });
  }

  onChange(time: string){
    
    if(this.time.includes('morning')){
      this.post.morning=true;
      
    }else{
      this.post.morning=false;
    }

    if(this.time.includes('afternoon')){
      this.post.afternoon=true;
    }else{
      this.post.afternoon=false;
    }

    if(this.time.includes('night')){
      this.post.night=true;
    }else{
      this.post.night=false;
    }
    console.log("time: ",this.time);
    console.log("morning: ",this.post.morning);
    console.log("afternoon: ",this.post.afternoon);
    console.log("night: ",this.post.night);
  }

  savePost() {
    this.postService
      .createPost(this.post.pill, this.post.deposit, this.post.weight, this.post.morning,this.post.afternoon,this.post.night)
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(["/page-config"]);
      });
  }

  updatePost() {
    this.postService
      .updatePost(this.post.id, {
        pill: this.post.pill,
        deposit:this.post.deposit,
        weight: this.post.weight,
        morning: this.post.morning,
        afternoon: this.post.afternoon,
        night: this.post.night,
      })
      .subscribe((res) => {
        console.log(res);
        this.editing = false;
        this.router.navigate(["/page-config"]);
      });
  }
}
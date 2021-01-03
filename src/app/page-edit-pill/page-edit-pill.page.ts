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
  };

  days: boolean;

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

  savePost() {
    this.postService
      .createPost(this.post.pill, this.post.deposit, this.post.weight)
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
      })
      .subscribe((res) => {
        console.log(res);
        this.editing = false;
        this.router.navigate(["/page-config"]);
      });
  }
}
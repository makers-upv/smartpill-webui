import { Component, OnInit } from "@angular/core";
import { PostService, Post } from "../services/post.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-page-edit-dosis',
  templateUrl: './page-edit-dosis.page.html',
  styleUrls: ['./page-edit-dosis.page.scss'],
})
export class PageEditDosisPage implements OnInit {
  post: Post = {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  };
  constructor() { }

  ngOnInit() {
  }

}

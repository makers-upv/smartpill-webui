import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { PostService, Post } from "../services/post.service";


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

  editing = false;

  constructor(private postService: PostService,
    private router: Router,
    private actiavtedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actiavtedRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get("postId")) {
        this.postService
          .getPostById(paramMap.get("postId"))
          .subscribe((res) => {
            this.post = res;
          });
      }
    });
  }

    change(){
      console.clear();
      console.log("monday: ", this.post.monday);
      console.log("tuesday: " , this.post.tuesday);
      console.log("wednesday: " , this.post.wednesday);
      console.log("thursday: " , this.post.thursday);
      console.log("friday: " , this.post.friday);
      console.log("saturday: " , this.post.saturday);
      console.log("sunday: " , this.post.sunday);

    }
    
  saveSchedule(){
    this.postService
      .saveSchedule(this.post.id, {
        monday: this.post.monday,
        tuesday: this.post.tuesday,
        wednesday: this.post.wednesday,
        thursday: this.post.thursday,
        friday: this.post.friday,
        saturday: this.post.saturday,
        sunday: this.post.sunday,
      })
      .subscribe((res) => {
        console.log(res);
        this.editing = false;
        this.router.navigate(["/page-config"]);
      });
  }
}

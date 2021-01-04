import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { PostService, Post, Post2 } from "../services/post.service";


@Component({
  selector: 'app-page-edit-dosis',
  templateUrl: './page-edit-dosis.page.html',
  styleUrls: ['./page-edit-dosis.page.scss'],
})
export class PageEditDosisPage implements OnInit {
 post1: Post = {
   morning: false,
 }
  post: Post2 = {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  }; 
  
  id:number;
  constructor(private postService: PostService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get("postId2")) {
        this.postService
          .getPostById2(paramMap.get("postId2"))
          .subscribe((res) => {
            this.post = res;
          });
      }
    });
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get("postId")) {
        let id = +this.activatedRoute.snapshot.paramMap.get('postId');
        console.log(this.activatedRoute.snapshot.paramMap.get('postId'));
         this.id=id;
         
      }
    });
    
  }

    change(){
      console.clear();
      if(this.post.monday || this.post.tuesday || this.post.wednesday || this.post.thursday || this.post.friday || this.post.saturday || this.post.sunday){
        this.post1.morning=true;
      } else{
        this.post1.morning=false;
      }
      console.log("morning: ",this.post1.morning);
      console.log("monday: ", this.post.monday);
      console.log("tuesday: " , this.post.tuesday);
      console.log("wednesday: " , this.post.wednesday);
      console.log("thursday: " , this.post.thursday);
      console.log("friday: " , this.post.friday);
      console.log("saturday: " , this.post.saturday);
      console.log("sunday: " , this.post.sunday);

    }
    

    saveSchedule() {
      this.postService.updateMorning(this.id,{morning: this.post1.morning}).subscribe((res) => {
        console.log(res);
        console.log(this.id);
      });
      this.postService
        .createSchedule(this.post.monday, this.post.tuesday, this.post.wednesday, this.post.thursday, this.post.friday, this.post.saturday, this.post.sunday)
        .subscribe((res) => {
          console.log(res);
          
        this.router.navigate(["/page-config"]);
        });
    }

  updateSchedule(){
    this.postService
      .updateSchedule(this.post.id, {
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
        this.router.navigate(["/page-config"]);
      });
  }
}

import { Component, OnInit } from "@angular/core";

import { PostService, Post, Dep } from "../services/post.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AlertController } from "@ionic/angular";

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

  dep: Dep = {
    n1: null,
    n2: null,
    n3: null,
    n4: null,
  }
  time: string []=[]

  editing = false;

  constructor(
    private postService: PostService,
    private router: Router,
    private actiavtedRoute: ActivatedRoute,
    private alertController: AlertController
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

  onChangeD(){
    if(!this.dep.n1 && this.post.deposit==='1'){
      this.dep.n1=true;
    }

    if(!this.dep.n2 && this.post.deposit==='2'){
      this.dep.n2=true;
    }
    if(!this.dep.n3 && this.post.deposit==='3'){
      this.dep.n3=true;
    }
    if(!this.dep.n4 && this.post.deposit==='4'){
      this.dep.n4=true;
    }

    if(this.dep.n1 && this.post.deposit==='1'){
      alert();
      this.post.deposit=null;
    }

    if(this.dep.n2 && this.post.deposit==='2'){
      alert();
      this.post.deposit=null;
    }
    if(this.dep.n3 && this.post.deposit==='3'){
      alert();
      this.post.deposit=null;
    }
    if(this.dep.n4 && this.post.deposit==='4'){
      alert();
      this.post.deposit=null;
    }
    console.log("deposit: ", this.post.deposit);
    console.log("dep: ",this.dep);
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

  alert(){
    const alert = this.alertController.create({
      header: "Alert",
      subHeader: "The deposit you selected is already occupied",
      message: "Select another one",
      buttons: [
        "Okay"
      ],
    });
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
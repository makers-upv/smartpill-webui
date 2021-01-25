import { Component, OnInit } from '@angular/core';
import { AlertController } from "@ionic/angular";
import { PostService, Post, Dep, Log} from "../services/post.service";

@Component({
  selector: 'app-page-config',
  templateUrl: './page-config.page.html',
  styleUrls: ['./page-config.page.scss'],
})
export class PageConfigPage implements OnInit {
  posts: Post[] = [];
  dep: Dep[] = [];
  log: Log[]=[];
  
  API = 'http://localhost:1337/pills';
  constructor(
    private postService: PostService,
    private alertController: AlertController
  ) {}

  loadPosts() {
    this.postService.getPosts().subscribe(
      (res) => {
        this.posts = res;
      },
      (err) => console.log(err)
    );
    this.postService.getDeposit().subscribe(
      (res) => {
        this.dep = res;
        console.log(this.dep);
      },
      (err) => console.log(err)
    );
    this.postService.getLogs().subscribe(
      (res) => {
        this.log = res;
        console.log(this.log);
      },
      (err) => console.log(err)
    );
  }

  ngOnInit() {
    
    this.loadPosts();
    
  }

  ionViewWillEnter() {
    this.loadPosts();
  }

  
  async removePost(id: string) {
    const alert = await this.alertController.create({
      header: "Alert",
      subHeader: "Are you sure you want to delete this deposit?",
      message: "You won't be able to recover it.",
      buttons: [
        "Cancel",
        {
          text: "Yes",
          handler: () => {
            this.postService.removePost(id).subscribe(
              (res) => {
                console.log(res);
                this.loadPosts();
              },
              (err) => console.log(err)
            );
          },
        },
      ],
    });

    await alert.present();
  }
}
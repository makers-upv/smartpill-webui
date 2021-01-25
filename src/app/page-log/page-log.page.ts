import { Component, OnInit } from '@angular/core';
import { AlertController } from "@ionic/angular";
import { PostService, Log} from "../services/post.service";

@Component({
  selector: 'app-page-log',
  templateUrl: './page-log.page.html',
  styleUrls: ['./page-log.page.scss'],
})
export class PageLogPage implements OnInit {
  log: Log[]=[];

  constructor(
    private postService: PostService,
    private alertController: AlertController
  ) {}

  loadPosts() {
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

  
}

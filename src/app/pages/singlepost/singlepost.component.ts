import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/shared/models/models';
import { HttpService } from 'src/app/shared/services/http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.scss']
})
export class SinglepostComponent implements OnInit {
  news: Post

  data;
  id: any


  constructor(
    private _activedRoute: ActivatedRoute,
    private HttpServie: HttpService,
    private toastr: ToastrService) {

  }

  ngOnInit() {
    this.id = this._activedRoute.snapshot.params['id'];
this. getSinglePost()

  }

  getSinglePost(){
    this.HttpServie.GetPostByid(this.id).subscribe(
       res => {

        this.data = res as Post;
        console.log(res)
      },
      error => {

      },
    )
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
@Input() Post:Post = {} as Post;
@Output() Deleted = new EventEmitter<Post>();

deletePost():void{
  this.Deleted.emit(this.Post);
}
}

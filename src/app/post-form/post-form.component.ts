import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
newPost:Post = {} as Post;
display:boolean = false;
@Output() Submitted = new EventEmitter<Post>;

submitPost():void{
  let result:Post ={
    title: this.newPost.title,
    thought: this.newPost.thought,
  }
  this.Submitted.emit(result);
}

toggleDisplay():void{
  this.display=!this.display;
}


}

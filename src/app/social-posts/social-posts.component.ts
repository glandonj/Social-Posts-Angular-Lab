import { Component } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent {
posts:Post[]=[
  {
    title:"Psalm 94:19",
    thought: "When the cares of my heart are many, your consolations cheer my soul."
  },
  {
    title:"1 Chronicles 16:27",
    thought: "Splendor and majesty are before him; strength and joy are in his place."
  },
];

onSubmit(newPost:Post){
  this.posts.unshift(newPost);
}

onDelete(deletePost:Post):void{
  for(let i:number=0; i<this.posts.length; i++){
    if(this.posts[i].title === deletePost.title){
      this.posts.splice(i,1);
      break;
    }
  }
}

}

import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post{
  title:string;
  content:string;
}

interface PostId extends Post {
  id:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  postsCollection: AngularFirestoreCollection<Post>;
  // posts: Observable<Post[]>;
  posts: any
  title: string;
  content: string;
  Id:string
  postDoc:AngularFirestoreDocument<Post>;
  post: Observable<Post>;


  constructor(private angularFirestore:AngularFirestore) {}
  
  addPost(){
    this.angularFirestore.collection('posts').add({'title':this.title,'content':this.content})
    // this.angularFirestore.collection('posts').doc('custom_id').set({'title':this.title,'content':this.content})
  }

  getPost(postId){
    this.postDoc = this.angularFirestore.doc('posts/'+postId);
    this.post = this.postDoc.valueChanges();
  }

  updatePost(postId){
    
    //napravi update post 

  }


  ngOnInit(){

    this.postsCollection = this.angularFirestore.collection('posts');
    // this.posts = this.postsCollection.valueChanges();
    this.posts = this.postsCollection.snapshotChanges()
    .map(action => {
      return action.map(a =>{
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;

        return {id,data};
      })
      
    })

  }















}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetChirrupsService } from '../../services/get-chirrups.service';
import { Chirrup, Comment, Content } from '../../../core/models/chirrup';
import { CommentService } from 'src/app/features/chirrup/services/comment.service';
import { SharedService } from 'src/app/features/chirrup/services/shared.service';

@Component({
  selector: 'app-chirrup-list',
  templateUrl: './chirrup-list.component.html',
  styleUrls: ['./chirrup-list.component.sass', '../chirrup-card/chirrup-card.component.sass']
})
export class ChirrupListComponent implements OnInit, OnDestroy {
  news: Chirrup[] = [];
  newCommentText: string = '';
  private refreshSubscription: Subscription;

  constructor(
    private getChirrupsService: GetChirrupsService,
    private commentService: CommentService,
    private sharedService: SharedService
  ) { this.refreshSubscription = new Subscription(); }

  ngOnInit() {
    this.loadChirrups();
    // 订阅共享服务的刷新通知
    this.refreshSubscription = this.sharedService.getChirrupListRefreshNotifier().subscribe(() => {
      this.loadChirrups(); // 收到通知后刷新数据
    });
  }

  ngOnDestroy() {
    this.refreshSubscription.unsubscribe();
  }


  loadChirrups() {
    this.getChirrupsService.getNews().subscribe({
      next: (data: Chirrup[]) => {

        this.news = data.map((item: Chirrup) => {
          let isLiked = false; // 默认isLiked为false
          if (item._id !== undefined) {
            const storedIsLiked = localStorage.getItem(item._id);
            isLiked = storedIsLiked === 'true'; // 如果storedIsLiked为'true'，则isLiked为true
            if (storedIsLiked != null) {
              console.log(isLiked)
            }
          }
          console.log(isLiked)
          return {
            ...item,
            islike: isLiked,
            showComments: false,
          };
        });
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }


  toggleHeartIcon(chirrup: Chirrup) {
    chirrup.islike = !chirrup.islike;
    // 因为post service更改了model, 导致这里要handle chirrup._id undefined 的情况,实际上不会有不存在_id的post
    if (chirrup._id !== undefined) {
      localStorage.setItem(chirrup._id, chirrup.islike.toString());
    } else {
      console.error('chirrup._id is undefined');
    }
  };

  toggleCommentIcon(chirrup: Chirrup) {
    chirrup.showComments = !chirrup.showComments;
  }

  onSubmit(chirrup: Chirrup) {
    const currName = localStorage.getItem('userName');
    const newComment: Comment = {
      _id: '', // This will be generated by the backend
      publisherName: (currName === null) ? '' : currName, // Assuming default publisherName is 'Anon'
      content: {
        image: '', // Add image if available
        video: '', // Add video if available
        text: this.newCommentText, // Use the input text for the comment content
        _id: ''
      },
      publishedTime: new Date().toISOString() // Use current timestamp
    };

    this.commentService.addComment(chirrup._id || '', newComment).subscribe({
      next: _resp => {
        this.newCommentText = '';
        // After posting the comment, fetch the updated chirrups to display the new comment
        this.loadChirrups();
        alert("you have successfully added a new comment!");
      },
      error: _err => console.log("Error posing new comment:", _err)
    });
  }
}

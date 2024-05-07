import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { SharedService } from '../../services/shared.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Chirrup } from '../../../../core/models/chirrup';

@Component({
  selector: 'app-new-chirrup',
  templateUrl: './new-chirrup.component.html',
  styleUrls: ['./new-chirrup.component.sass']
})
export class NewChirrupComponent {
  chirrupForm: FormGroup;
  isLogin: boolean | undefined;

  constructor(
    private fb: FormBuilder,
    private PostService: PostService,
    private sharedService: SharedService,
    private auth: AuthService
  ) {
    this.chirrupForm = this.fb.group({
      text: ['', Validators.required],
      image: [''],
      video: ['']
    });

    this.auth.loginStatus.subscribe(update => {
      this.isLogin = update;
    })
  }

  postChirrup() {
    const formData = this.chirrupForm.value;
    const currName = localStorage.getItem('userName');

    const newChirrup: Chirrup = {
      publisherName: (currName === null || !this.isLogin) ? '' : currName,
      content: {
        // image: "image not available",
        // video: "video not available",
        text: formData.text
      },
      publishedTime: new Date().toISOString(),
      comment: [],
      likedIdList: []
    }


    this.PostService.postChirrup(newChirrup).subscribe({
      next: (chirrup: Chirrup) => {
        this.sharedService.emitChirrup(newChirrup);
        this.chirrupForm.reset();
        alert("you have successfully posted a new chirrup!");
      },
      error: (error: any) => console.error('Failed to post chirrup:', error)
    });
  }
}

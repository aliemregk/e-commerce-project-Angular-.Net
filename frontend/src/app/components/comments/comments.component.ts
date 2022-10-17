import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/models/comment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  commentAddForm: FormGroup;
  comments: Comment[];
  productComments: Comment[];
  loggedIn = false
  anyComment = false;

  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private commentService: CommentService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.activatedRoute.params.subscribe((params) => {
      this.getCommentDetails(params["productid"]);
      this.createCommentAddForm(params["productid"]);
    })
  }

  createCommentAddForm(id: number) {
    this.commentAddForm = this.formBuilder.group({
      userId: [localStorage.getItem("id"), Validators.required],
      productId: [id, Validators.required],
      content: ["", Validators.required]
    })
  }

  add() {
    if (this.commentAddForm.valid) {
      let commentModel = Object.assign({}, this.commentAddForm.value);
      console.log(commentModel);
      this.commentService.add(commentModel).subscribe({
        next: () => { this.toastrService.success("Comment added successfully.") },
        error: (err) => {
          console.log(err);
          this.toastrService.error("Can not add comment.")
        }
      })
    }
  }

  delete(comment: Comment) {
    this.commentService.delete(comment).subscribe({
      error: () => this.toastrService.info("Can't deleted comment."),
      complete: () => this.toastrService.info("Comment deleted.")
    });
  }

  getCommentDetails(id: number) {
    this.commentService.getDetails().subscribe(response => {
      this.comments = response.data.filter(c => c.productId == id)
    })
  }

  getUser() {
    if (localStorage.getItem("token")) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }
}

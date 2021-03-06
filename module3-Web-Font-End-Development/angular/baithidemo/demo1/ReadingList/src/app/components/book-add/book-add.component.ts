import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from 'src/app/models/book.class';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit , OnDestroy{

  public book : Book;
  public subscription : Subscription;
  public read:String;
  constructor(
    public bookService : BookService,
    public routerService : Router
    ) { }

  ngOnInit() {
    this.book = new Book();
  }
  ngOnDestroy(){
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onAddBook(){
    if(this.read=="true") {
      this.book.read=true;
    } else{
      this.book.read=false;
    }
    this.subscription = this.bookService.addBook(this.book).subscribe(data => {
      if(data.id && data){
      if(data.read==true){
          this.routerService.navigate(['list-book/list-reading']);
      }else{
      this.routerService.navigate(['list-book/list-already-reading']);
      }
    }
    });

  }

}

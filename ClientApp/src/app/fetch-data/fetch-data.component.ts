import { Component, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})

export class FetchDataComponent {
  public noSearchTextMessage: boolean;
  public base_url: string = "https://www.googleapis.com/books/v1/volumes";
  public api_key: string = "AIzaSyA9FE0hKKlmsnLlEf-rWpu_j0364T6EEyo";
  public bookArray: Book[];
  public selectedBook: Book;

  constructor(private http: HttpClient) {
    this.noSearchTextMessage = false;
  }

  public async searchBooks(search: string) {
    if (!(isNullOrUndefined(search) || search == "")) {
      this.noSearchTextMessage = false;
      this.bookArray = await this.getBooks(search);
    }
    else {
      // show a message that says you have not entereÏ any text
      this.noSearchTextMessage = true;
    }
  }

  public openDetails(book: Book) {
    console.log(book);
    this.selectedBook = book;
    document.getElementById("myModal").style.display = "block";


    // need to bring the cost details from the server

      // send that through to the modal
      // which in turn will send it to the buy controller action

    //this.http.get<number>("/purchase/calculate");

  }

  public closeDetailModal() {
    document.getElementById("myModal").style.display = "none";
    this.selectedBook = null;
  }

  public getBooks(search: string) {

    const params: HttpParams = new HttpParams()
      .set('q', search + "+inauthor:" + search + "+intitle:" + search)
      .set('key', this.api_key);

    return this.http.get<Book[]>(this.base_url, { params }).toPromise();
  }
}

interface VolumeInfo {
  title: string;
  authors: string[];
  publishedDate: Date;
  description: string;
  imageLinks: { smallThumbnail: string };
}

interface Book {
  id: string;
  volumeInfo: VolumeInfo;
}

// interface to get the results for 


interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

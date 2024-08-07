import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../../gifs/interfaces/gifs.interfaces';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit {

  @Input()
  public alt!: string;

  @Input()
  public url!: string;

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) {
      throw new Error('URL Property is requiered');
    }
  }

  onLoad() {
    console.log("Image Loaded");
    this.hasLoaded = true;
  }
}

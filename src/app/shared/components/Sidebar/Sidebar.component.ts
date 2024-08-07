import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './Sidebar.component.html',
  styleUrl: './Sidebar.component.css',
})
export class SidebarComponent {
  constructor(private gifsService: GifsService){}

  @ViewChild('txtButtonTag')
  public buttonTag!: ElementRef<HTMLButtonElement>;

  get tagsHistory() {
    return this.gifsService.tagsHistory;
  }

  searchTag(tag: string) {
    this.gifsService.searchTag(tag);
  }
}

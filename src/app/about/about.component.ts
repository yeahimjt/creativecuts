import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public testimonials = [
    ["../../assets/photo-1500648767791-00dcc994a43e.jpg","Michael M.", "Such an a amzing experience loved every second! Recommend to anyone who loves a good cut with amazing conversation!"],
    ["../../assets/photo-1507003211169-0a1dd7228f2d.jpg", "Cristopher P.", "Work with Ceaser, he's the best! The environment he creates is incredible!"],
    ["../../assets/photo-1525134479668-1bee5c7c6845.jpg","Sarah J.", "Woud go daily if I could. Can't get enough of this place!"],
  ];

}


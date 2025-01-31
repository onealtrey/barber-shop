import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-wheel',
  imports: [CommonModule],
  templateUrl: './image-wheel.component.html',
  styleUrl: './image-wheel.component.css',
})
export class ImageWheelComponent implements OnInit {
  images: string[] = [
    'assets/Haircut1.jpg',
    'assets/Haircut2.jpg',
    'assets/Haircut3.jpg',
    'assets/Haircut4.jpg',
    'assets/Haircut5.jpg',
    'assets/Haircut6.jpg',
    'assets/Haircut8.jpg',
    'assets/Haircut9.jpg',
    'assets/Haircut10.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}

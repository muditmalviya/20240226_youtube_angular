import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-videos',
  standalone: true,
  imports: [],
  templateUrl: './main-videos.component.html',
  styleUrl: './main-videos.component.css'
})
export class MainVideosComponent {
  thumbnail='https://as2.ftcdn.net/v2/jpg/04/83/93/81/1000_F_483938185_LeH5ySfRClEUKNbbSDVO4196v8H8ZRoS.jpg';
  creator_pp='https://cdn.vectorstock.com/i/1000x1000/17/61/male-avatar-profile-picture-vector-10211761.webp';
  video_details='How to make YouTube Clone using HTML & CSS';
  creator_name='Mudit Malviya';
  video_views='7.4M views • ';
  time='7 Months ago';
}

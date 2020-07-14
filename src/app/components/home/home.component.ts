import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public nuevasCanciones:any[] = [];
  public loading:boolean = true;

  constructor(private spotifyService:SpotifyService) { 

    this.spotifyService.getNewReleases()
      .subscribe((data:any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      })

  }

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('Servicio spotify listo')
   }

  getQuery(query){

    const url = `https://api.spotify.com/v1${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBrDljrrCpuMzJbUEW5DXq4b7y8jJVfzzawANF19KwcRY2AbX0GTybrzRi5rK0Ps87HnWQW-yVaf1kg85c'
    })

    return this.http.get( url , {headers});

  }
   
  getNewReleases(){
    return this.getQuery('/browse/new-releases').pipe( map(data => data['albums'].items));
  }

  getArtista(termino:string){
    return this.getQuery(`/search?q=${ termino }&type=artist&limit=15`).pipe( map(data => data['artists'].items) );
  }
}

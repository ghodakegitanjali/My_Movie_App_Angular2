
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
   createDb() {
       const movies = [
        { id: 1, name: 'Godfather' , director: 'ABC', genre: 'Crime', releaseDate: '01/01/1987', imgPath: 'assets/imgs/Godfather.jpg'
        },
        { id: 2, name: 'Pulpfiction', director: 'A', genre: 'Crime', releaseDate: '02/02/1998',
                        imgPath: 'assets/imgs/pulpfiction.jpg', gen: ['Action', 'Crime', 'Adventure', 'Fantasy', 'Romance'] , selected: ''},
        { id: 3, name: 'Titanic', director: 'B', genre: 'Lovestory', releaseDate: '03/03/1988' , imgPath: 'assets/imgs/titanic.jpg'
        },
        { id: 4, name: 'Hangover', director: 'C', genre: 'Comedy', releaseDate: '04/04/2000' , imgPath: 'assets/imgs/hangover.jpg'
        },
        { id: 5, name: 'Star Wars' , director: 'D', genre: 'Fantasy', releaseDate: '05/05/2011', imgPath: 'assets/imgs/starwars.jpg'
        },
        { id: 6, name: 'Terminator' , director: 'E', genre: 'Action', releaseDate: '06/06/2001',
        imgPath: 'assets/imgs/terminator.jpg'}
       ];

       const mgenre = [
        {id: 1, name: 'Action'},
       {id: 2, name: 'Crime'},
       {id: 3, name: 'Romance'},
       {id: 4, name: 'Comedy'},
       {id: 5, name: 'Fantasy'}
    ];
       return {movies, mgenre} ;



   }
}

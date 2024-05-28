import { http, HttpResponse } from 'msw';

//영화목록 조회
const movieList = [
  {
    Title: 'Crazy, Stupid, Love.',
    Year: '2011',
    imdbID: 'tt1570728',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Love Actually',
    Year: '2003',
    imdbID: 'tt0314331',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNThkNjgxNGQtOTIxMy00ZTFmLWIwMDItYzE5YzM3ZDMzNDE3XkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_SX300.jpg',
  },
  {
    Title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    Year: '1964',
    imdbID: 'tt0057012',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMWMxYjZkOWUtM2FjMi00MmI1LThkNzQtNTM5Y2E2ZGQ2NGFhXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg',
  },
  {
    Title: 'Thor: Love and Thunder',
    Year: '2022',
    imdbID: 'tt10648342',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Shakespeare in Love',
    Year: '1998',
    imdbID: 'tt0138097',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BM2ZkNjM5MjEtNTBlMC00OTI5LTgyYmEtZDljMzNmNzhiNzY0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg',
  },
];
//영화 상세조회
const movieDetail = {
  Title: 'Thor: Love and Thunder',
  Year: '2022',
  Released: '08 Jul 2022',
  Runtime: '118 min',
  Genre: 'Action, Adventure, Comedy',
  Director: 'Taika Waititi',
  Writer: 'Taika Waititi, Jennifer Kaytin Robinson, Stan Lee',
  Actors: 'Chris Hemsworth, Natalie Portman, Christian Bale',
  Plot: 'Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.',
  Language: 'English',
  Country: 'Australia, United States',
  Awards: '3 wins & 21 nominations',
  Poster: 'https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
  Ratings: [
    {
      Source: 'Internet Movie Database',
      Value: '6.2/10',
    },
    {
      Source: 'Rotten Tomatoes',
      Value: '63%',
    },
    {
      Source: 'Metacritic',
      Value: '57/100',
    },
  ],
  Metascore: '57',
  imdbRating: '6.2',
  imdbVotes: '397,760',
  imdbID: 'tt10648342',
  Type: 'movie',
  DVD: '08 Sep 2022',
  BoxOffice: '$343,256,830',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True',
};

export const handlers = [
  //전체 조회
  http.get('/movies', () => {
    return HttpResponse.json(movieList);
  }),
  //특정 데이터 조회
  http.get('/movies/:imdbID', ({ params }) => {
    const imdbID = params;
    if ('tt10648342' === imdbID) return HttpResponse.json(movieDetail);
    return new HttpResponse(null, {
      status: 400,
    });
  }),
  //데이터 추가
  http.post('/movies', ({ request }) => {
    console.log('Captured a "POST /movies" request');
    console.log(request);
    return new HttpResponse(null, {
      status: 200,
    });
  }),
  //특정 데이터 삭제
  http.delete('/movies/:imdbID', ({ params }) => {
    console.log(`Captured a "DELETE /movies/${params.id}" request`);
    return new HttpResponse(null, {
      status: 200,
    });
  }),
];

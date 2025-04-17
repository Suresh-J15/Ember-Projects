/* eslint-disable no-console */
/* eslint-disable no-unused-vars */


export default function () {

  this.namespace = 'api';

  // Get /api/movies
  this.get('/movies', function (schema) {
    // console.log(schema.movies.all());
    return {
      data: schema.movies.all().models.map(movie => {
        return {
          id: movie.id,
          type: 'movie',
          attributes: {
            movieTitle: movie.movieTitle,
            directedBy: movie.director,
            year: movie.year,
          }
        }
      })
    };
  });


  // GET /api/movies/:movie_id
  this.get('movies/:movie_id', function (schema, request) {
    let record = schema.movies.all().models.filterBy('id', request.params.movie_id)[0];
    return {
      data: {
        type: 'movie',
        id: request.params.movie_id,
        attributes: {
          movieTitle: record.movieTitle,
          year: record.year,
          directedBy: record.director,
          genres: record.genres,
          releaseDate: record.releaseDate,
          rating: record.rating,
          imdbRating: record.imdbRating,
          description: record.description,
        }
      }
    }
  });


  // POST /api/movies
  this.post('/movies', function (schema, request) {
    return schema.movies.create(JSON.parse(request.requestBody));
  });


  // PUT /api/movies/edit-item
  this.patch('/movies/:segment_id', function (schema, request) {
    let attrs = JSON.parse(request.requestBody);
    let movie = schema.movies.find(request.params.segment_id);
    return movie.update(attrs.data.attributes);
  })


  // DELETE /api/movies/:movie_id
  this.del('/movies/:movie_id', function (schema, request) {
    return schema.movies.find(request.params.movie_id).destroy()
  });

  // DELETE /api/movies/:movie_id
  /*
   * this.delete('/movies/:movie_id', function (schema, request) {
   * // console.log(schema.movies.find(request.params.movie_id));
   * return schema.movies.find(request.params.movie_id).destroy();
   * }); 
   */



}

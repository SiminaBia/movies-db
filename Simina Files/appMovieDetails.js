

/*  fetch('https://ancient-caverns-16784.herokuapp.com/movies?take=1&skip=6')
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      //console.log(data);
      console.log(data.results);
      showMovies(data.results);
    });


    function showMovies(movies) {
 
        let MoviePage = document.querySelector('.MoviePage');
        
        movies.forEach(movie => {

         /*  var poster = document.createElement('img');
          poster.src = 'https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg';
          poster.innerHTML = movie.Poster;
          document.getElementById('MoviePoster').appendChild(poster);  */
          
       /*   
          var title = document.createElement('h2');
          title.innerText = movie.Title;  
          document.getElementById('MovieTitle').appendChild(title);

          var year = document.createElement('p'); 
          year.innerText = movie.Year;   
          document.getElementById('MovieYear').appendChild(year);

          var genre = document.createElement('p'); 
          genre.innerText = movie.Genre;   
          document.getElementById('MovieGenre').appendChild(genre);

          var language = document.createElement('p'); 
          language.innerText = movie.Language;   
          document.getElementById('MovieLanguage').appendChild(language);
          
          var country = document.createElement('p'); 
          country.innerText = movie.Country;   
          document.getElementById('MovieCountry').appendChild(country);
          
          var runtime = document.createElement('p'); 
          runtime.innerText = movie.Runtime;   
          document.getElementById('MovieRuntime').appendChild(runtime);

          
        });

    } */
 
    fetch('https://ancient-caverns-16784.herokuapp.com/movies?take=1&skip=6')
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      //console.log(data);
      console.log(data.results);
      showMovies(data.results);
    });

   /*  function displayPhoto(poster) {

          movie => { */

         /*  var poster = document.createElement('img');
          poster.src = 'https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg';
          poster.innerHTML = movie.Poster;
          document.getElementById('MoviePoster').appendChild(poster);   */
     //   };

     // }





    function showMovies(movies) {
 
        let MoviePage = document.querySelector('.MoviePage');
        
        movies.forEach(movie => {
         
         
          var title = document.createElement('h2');
          title.innerText = movie.Title;  
          document.getElementById('MovieTitle').appendChild(title);

          var year = document.createElement('p'); 
          year.innerText = movie.Year;   
          document.getElementById('MovieYear').appendChild(year);

          var genre = document.createElement('p'); 
          genre.innerText = movie.Genre;   
          document.getElementById('MovieGenre').appendChild(genre);

          var language = document.createElement('p'); 
          language.innerText = movie.Language;   
          document.getElementById('MovieLanguage').appendChild(language);
          
          var country = document.createElement('p'); 
          country.innerText = movie.Country;   
          document.getElementById('MovieCountry').appendChild(country);
          
          var runtime = document.createElement('p'); 
          runtime.innerText = movie.Runtime;   
          document.getElementById('MovieRuntime').appendChild(runtime);

          
        });

    }

 
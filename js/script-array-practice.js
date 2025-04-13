//STEP 1
console.log("STEP 1");  
let array = ['Avengers: Endgame', 'Titanic', 'The Pursuit of Happyness', 'Inception', 'Avatar']; 
console.log(array[1]);

//STEP 2
console.log("STEP 2");
let movies = new Array(5) ;
movies[0] = 'Avengers: Endgame';
movies[1] = 'Titanic';   
movies[2] = 'The Pursuit of Happyness';
movies[3] = 'Inception';
movies[4] = 'Avatar';
console.log(movies[0]); 

//STEP 3
console.log("STEP 3");
movies = new Array(5) ;
movies[0] = 'Avengers: Endgame';
movies[1] = 'Titanic';   
movies[2] = 'The Pursuit of Happyness';
movies[3] = 'Inception';
movies[4] = 'Avatar';
movies.splice(2, 0, 'The Dark Knight');
console.log(movies.length);  

//STEP 4
console.log("STEP 4");
movies = [] ; 
movies[0] = 'Avengers: Endgame';
movies[1] = 'Titanic';      
movies[2] = 'The Pursuit of Happyness';
movies[3] = 'Inception';    
movies[4] = 'Avatar';   
delete movies[0];   
movies.forEach((arrayName) => console.log(arrayName)); 

//STEP 5
console.log("STEP 5");  
movies = [] ; 
movies[0] = 'Avengers: Endgame';
movies[1] = 'Titanic';      
movies[2] = 'The Pursuit of Happyness';
movies[3] = 'Inception';    
movies[4] = 'Avatar';   
movies[5] = 'The Dark Knight'; 
movies[6] = 'Interstellar';  
for (let i in movies) { 
    if(movies.hasOwnProperty(i)) {
        console.log(movies[i]); 
    }
}   

//STEP 6
console.log("STEP 6");
movies = [] ; 
movies[0] = 'Avengers: Endgame';
movies[1] = 'Titanic';      
movies[2] = 'The Pursuit of Happyness';
movies[3] = 'Inception';    
movies[4] = 'Avatar';   
movies[5] = 'The Dark Knight'; 
movies[6] = 'Interstellar';
for (let movie of movies) { 
    console.log(movie);  
} 

//STEP 7
console.log("STEP 7");
movies = [] ; 
movies[0] = 'Avengers: Endgame';
movies[1] = 'Titanic';      
movies[2] = 'The Pursuit of Happyness';
movies[3] = 'Inception';    
movies[4] = 'Avatar';   
movies[5] = 'The Dark Knight'; 
movies[6] = 'Interstellar';
movies.sort();
for (let i in movies) { 
    console.log(movies[i]);  
} 
//STEP 8
console.log("STEP 8");  
movies = [] ; 
movies[0] = 'Avengers: Endgame';
movies[1] = 'Titanic';      
movies[2] = 'The Pursuit of Happyness';
movies[3] = 'Inception';    
movies[4] = 'Avatar';   
movies[5] = 'The Dark Knight'; 
movies[6] = 'Interstellar';  

// least favorite movies
let leastFavMovies = ["The Last Airbender", "Cats", "Movie 43"]; 
console.log("Movies I like: \n\n"); 
for (let i in movies) { 
    if(movies.hasOwnProperty(i)) {
        console.log(movies[i]); 
    }
}   
console.log("...\n\nMovies I regret watching: \n\n"); 

for (let i in leastFavMovies) { 
    if(movies.hasOwnProperty(i)) {
        console.log(leastFavMovies[i]); 
    }
}
console.log("\n...\n")
//STEP 9
console.log("STEP 9");  
movies = [] ; 
movies[0] = 'Avengers: Endgame';
movies[1] = 'Titanic';      
movies[2] = 'The Pursuit of Happyness';
movies[3] = 'Inception';    
movies[4] = 'Avatar';   
movies[5] = 'The Dark Knight'; 
movies[6] = 'Interstellar';  

// least favorite movies
leastFavMovies = ["The Last Airbender", "Cats", "Movie 43"]; 

allMovies = movies.concat(leastFavMovies); 
allMovies.sort().reverse();  

allMovies.forEach((movie) => console.log(movie)); 

//STEP 10
console.log("STEP 10");  
movies = [] ; 
movies[0] = 'Avengers: Endgame';
movies[1] = 'Titanic';      
movies[2] = 'The Pursuit of Happyness';
movies[3] = 'Inception';    
movies[4] = 'Avatar';   
movies[5] = 'The Dark Knight'; 
movies[6] = 'Interstellar';  

// least favorite movies
leastFavMovies = ["The Last Airbender", "Cats", "Movie 43"]; 

allMovies = movies.concat(leastFavMovies); 
allMovies.sort().reverse();  
let lastMovie = allMovies.find((value, index, array) => index === array.length - 1);
console.log(lastMovie);


//STEP 11
console.log("STEP 11");  
movies = [] ; 
movies[0] = 'Avengers: Endgame';
movies[1] = 'Titanic';      
movies[2] = 'The Pursuit of Happyness';
movies[3] = 'Inception';    
movies[4] = 'Avatar';   
movies[5] = 'The Dark Knight'; 
movies[6] = 'Interstellar';  

// least favorite movies
leastFavMovies = ["The Last Airbender", "Cats", "Movie 43"]; 

allMovies = movies.concat(leastFavMovies); 
allMovies.sort().reverse();  
let firstMovie = allMovies.find((value, index, array) => index === 0);
console.log(firstMovie);

//STEP 12
console.log("STEP 12");
let leastFavMovie1 = allMovies.lastIndexOf("Movie 43");
let leastFavMovie2 = allMovies.lastIndexOf("Cats");  
allMovies.splice(leastFavMovie1, 1, "Avatar2");  
allMovies.splice(leastFavMovie2, 1, "Inside Out");
allMovies.forEach((movie) => console.log(movie)); 

//STEP 13
console.log("STEP 13"); 
movies = [["Avengers: Endgame", 1], ["Titanic", 2], ["The Pursuit of Happyness", 3], ["Inception", 4], ["Avatar", 5]];
let moviesNew = [] ; 
for (let i in movies) { 
    if(movies.hasOwnProperty(i)) { 
        moviesNew[i] = (movies[i].filter((item) => {
       return typeof item[0] === 'string';}))[0]; 

    }
   
}   
moviesNew.forEach((movie) => console.log(movie)); 

//STEP 14

console.log("STEP 14");
let employeesNames = ['JOHN', 'JANE', 'ALICE', 'BOB', 'CHARLIE'];    
let showEmployee = (empArray) => { 
    console.log("Employees: \n\n"); 
    empArray.forEach((employee) => console.log(employee)); 
}   
showEmployee(employeesNames);     

//STEP 15
//Write a JavaScript function to filter false, null, 0 and blank values from an array of strings and numbers.
console.log("STEP 15");
let mixedArray = [58, '', 'abcd', true, null, false, 0]; // Test Data 
let filterValues = (mixedArray) => {
    return ( 
    mixedArray.filter((item) => {
    return item !== false && item !== null && item !== 0 && item !== '' && item !== undefined;
    })

   ) 
} 
console.log("Expected Result: " + filterValues(mixedArray)); 

//STEP 16
console.log("STEP 16"); 
let numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let getRandomItem = (array) => {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
console.log("Random Item: " + getRandomItem(numericArray));     

//STEP 17
//Write a JavaScript function to get the largest number from a numeric array. Do not use Math.max() method. 
console.log("STEP 17");
let numericArray2 = [1, 2, 3, 10, 5, 6, 7, 8, 9, 4];
let getLargestNumber = (array) => {
    let largest = array[0]; 
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}
console.log("Largest Number: " + getLargestNumber(numericArray2));      
    
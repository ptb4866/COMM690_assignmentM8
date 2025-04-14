//STEP 1
//Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
console.log("STEP 1");  
let array = ['Avengers: Endgame', 'Titanic', 'The Pursuit of Happyness', 'Inception', 'Avatar']; 
console.log(array[1]);

//STEP 2
//Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. Then, assign 
//one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console 
//to display the first movie in your array
console.log("STEP 2");
let movies = new Array(5) ;
movies[0] = 'Avengers: Endgame';
movies[1] = 'Titanic';   
movies[2] = 'The Pursuit of Happyness';
movies[3] = 'Inception';
movies[4] = 'Avatar';
console.log(movies[0]); 

//STEP 3
//Copy your code from step 2. Add a new movie into the 3rd position within your array. Then, use the console to display the 
//length of the array. You should now have 6 total movies stored in the array.
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
//Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until 
//you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to 
//display the contents of the array.
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
//Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array
//until you have 7 total movies in your array. Now, use a for/in loop to iterate through the array and display each movie
// within the console window.
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
//Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window.
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
//Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie within the console window in a sorted view.
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
//Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching.
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
//Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. 
//Use the console window to display the list in reverse sorted
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
//Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.
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
//Copy the code from step 10. Remove the previous method and this time use a method to return just the first item 
//in the array and display it within the console window.
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
//Programmatically retrieve the movies in your array that you do not like and return their indices. 
//Then, using those indices, programmatically add movies that you do like.
console.log("STEP 12");
let leastFavMovie1 = allMovies.lastIndexOf("Movie 43");
let leastFavMovie2 = allMovies.lastIndexOf("Cats");  
allMovies.splice(leastFavMovie1, 1, "Avatar2");  
allMovies.splice(leastFavMovie2, 1, "Inside Out");
allMovies.forEach((movie) => console.log(movie)); 

//STEP 13
//Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. 
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
//Create a string array called employees using literal notation and populate the array with several employee names. 
//Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function,
//passing in the employees array into the function as a parameter. Make sure to display the result in the console window.
//Within the function, loop through the passed in array and display the result
console.log("STEP 14");
let employeesNames = ['JOHN', 'JANE', 'ALICE', 'BOB', 'CHARLIE'];    
let showEmployee = (empArray) => { 
    console.log("Employees: \n\n"); 
    empArray.forEach((employee) => console.log(employee)); 
}   
showEmployee(employeesNames);     

//STEP 15
//Write a JavaScript function to filter false, null, 0 and blank values from an array.
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
//Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers 
//and then pass that array into my function, the function should randomly return one of those numbers.
console.log("STEP 16"); 
let numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let getRandomItem = (array) => {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
console.log("Random Item: " + getRandomItem(numericArray));     

//STEP 17
//Write a JavaScript function to get the largest number from a numeric array.
console.log("STEP 17");
let numericArray2 = [1, 15, 3, 10, 5, 6, 7, 8, 9, 4];
let getLargestNumber = (array) => {
    let sortedArray = array.sort((a, b) => a - b); //noted: (a, b) => a - b sort in ascending order
    return sortedArray[sortedArray.length - 1]; 

}
console.log("Largest Number: " + getLargestNumber(numericArray2));    

/*
// Alternative solution for STEP 17 without using sort
console.log("STEP 17 Alternative");
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
*/ 
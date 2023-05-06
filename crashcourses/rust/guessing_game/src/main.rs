// import io library from std 
use std::io;

// fn main() {
//     println!("Guess the Number");
//     println!("Please input your number");
//     let mut guess = String::new();
//     // String::new() means new is an associated function of the string type
//     // an associated function is a function that’s implemented on a type
//     //  This new function creates a new, empty string.
//     // the 'let mut guess = String::new();' line has created a mutable variable that is currently bound to a new, empty instance of a String

//     io::stdin().read_line(&mut guess)
//     // io::stdin()  call the stdin function from the io module,
//     // calling read_line method on the standard input handle to get input from the user, its takes whatever the user types into standard input and append that into a string (without overwriting its contents)
//     // passing '&mut guess' as the argument to read_line to tell it what string to store the user input in
// }

fn main() {
    println!("Guess the number!");

    println!("Please input your guess.");

    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    println!("You guessed: {guess}");
}

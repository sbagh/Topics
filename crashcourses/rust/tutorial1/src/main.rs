fn main() {
    // implicit type
    let x = 4;
    println!("x is : {}", x);
    //mutable variable
    let mut y = 4;
    y = 5;
    println!("y is : {}", y);
    {
        let x = 2;
        println!("x is: {}", x);
    }
    let x = 3;
    println!("x is : {}", x);
    let x = "hello";
    println!("x is {}", x);
    // let y = 'hi';
    // print("y i s {}", y);
    //constants
    const SECONDS_IN_MINUTE: u32 = 60;
    println!("{}", SECONDS_IN_MINUTE);
}

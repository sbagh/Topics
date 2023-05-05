fn main() {
    // SCALAR TYPE:
    println!("Hello, world!");
    // 1) integer
    let x: i32 = 2;
    println!("{}", x);
    // i8,16,32,64,128
    // u8,16,32,64,128
    // 2) floating: with decimal
    //f32 - default or 64
    let y: f32 = 15.3;
    // 3) boolean
    let option: bool = true;
    // 4) char type
    let letter: char = 'a';
    // COMPOUND TYPE:
    // 5) Tupple
    let mut tup: (i32, bool, char) = (1, true, 's');
    //now modify
    tup.0 = 10;
    tup = (16, false, 's');
    println!("{}", tup.0);
    // 6) array
    let mut arr1 = [1,2,3,4,5];
    arr1[0]=4;
    println!("{}", arr1[0]);
}

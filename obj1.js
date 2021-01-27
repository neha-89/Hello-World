async function hello(){
    return "hello";
}
console.log(hello());

let hello1 = async function(){
    return "hello";

}
console.log(hello1());

hello1().then(console.log);


async function hello(){
    return greeting = await Promise.resolve("hello");
}
hello().then(console.log);
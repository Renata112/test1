//1st task

const containsOnlyDigits=(str)=>{
    const regExp=/^[0-9]+$/;
    return regExp.test(str);
}
console.log(containsOnlyDigits("123456789"));
console.log(containsOnlyDigits("1234567d89"));
console.log(containsOnlyDigits(""));

//SetInterval

setInterval(()=>{
 console.log("One second left");
 }, 1000)

//Counter

const count = () => {
    let i = 1;
    const interval = setInterval(()=>{
        console.log(i);
        if (i ===10){
            clearInterval(interval);

        }
        i++;
    },1000);
};
count();

//JSON

    const request=new XMLHttpRequest();
    request.open("GET","data.json");
    request.setRequestHeader("Content-type","application/json");
    request.send();


    request.onload = function() {
        console.log(JSON.parse(request.responseText));
    };
function alertuser(){
    const name = document.querySelector("fname");
    //alert("Hi "+name+", Your details are submitted.\n We will contact you shortly!")
    const btn = document.querySelector("submit");
    btn.addEventListener("click",function(){
        alert("Hi, Your details are submitted! We will Contact you shortly!");

    });
}
let search = document.getElementsByClassName('set');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
     console.log('Input event fired!', inputVal);
    let cardbody = document.getElementsByClassName('card-body')
    Array.from(card-body).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
         console.log(cardTxt);
    })
})

document.querySelector('#button').addEventListener('click',getData);

function getData(){
    //Create XHR object
    const xhr = new XMLHttpRequest();
    
    //Open
    xhr.open('GET', 'data.txt', true);
    console.log(`Ready state ${xhr.readyState}`)

    xhr.onprogress = function(){
        console.log(`Ready state ${xhr.readyState}`)
    }

    xhr.onload = function(){
        console.log(`Ready state ${xhr.readyState}`)
        if(this.status === 200){
              console.log(this.responseText);  
              
        }
    };

    xhr.onerror = function(){
        console.log('Error has occured')
    }

    xhr.send();
}
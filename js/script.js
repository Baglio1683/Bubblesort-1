
const randnum =Math.floor((Math.random() * 11) + 10); 
console.log(randnum)

const arrayNum = [];
const listun = document.querySelector(".ms_un-lis");


for(let i = randnum ;  i > 0 ; i--){

    let numCasual = Math.floor((Math.random() * 100) + 1);
    let el = document.createElement('li');
    el.innerHTML = numCasual;



    arrayNum.push(numCasual);
    listun.appendChild(el)
    

}

console.log(arrayNum)




let change; 

do{
    
    change = false; 

    for(let i=0 ; i < arrayNum.length-1 ; i++){

        if(arrayNum[i] > arrayNum[i+1]){

          let supp = arrayNum[i]; 
          arrayNum[i] = arrayNum[i+1];
          arrayNum[i+1] = supp;
          change = true;  
        }
    }
    

}while(change); 

console.log(arrayNum)


const listor = document.querySelector(".ms_ord-lis"); 

for(let k = 0; k < arrayNum.length ; k++){
      
    let elem = document.createElement('li'); 
    elem.innerHTML = arrayNum[k]; 
   
    listor.appendChild(elem); 
    
}

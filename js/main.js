let input=document.querySelector('#input')

let btn=document.querySelector('#btn')
let ul=document.querySelector('ul')


function sulton() {


btn.addEventListener('click', ()=> {

/*input.value - kiritilgan matn hisoblanadi.Agar matnga hech narsa yozilmasa 
 Iltimos matnni kiriting😁😁  degan yozuv chiqadi.  
 if dagi 2 chi shart  esa  [Iltimos matnni kiriting😁😁]  matn sifatida qabul qilinmasligi uchun yozilgan   */


if(input.value==''||input.value=='Iltimos matnni kiriting😁😁') { 
    input.value='Iltimos matnni kiriting😁😁'
}
else{

    let li=document.createElement('li')  // li atributi yaratildi
let span=document.createElement('span')  // span atributi yaratildi
let button=document.createElement('button') /* button atributi yaratildi. Bu atributlar 
 HTML dagi commentariyalardan keldi  */


    span.innerHTML=input.value // input.value ga kiritilgan matnlar  span ni ichiga yozilishi uchun 
    li.appendChild(span) // HTML dagi comentariyada  span  li ni ichida joylashgan. appenchild orqali span ni li ni ichiga joyladik.
    li.appendChild(button) // span ga oxshash
    ul.appendChild(li) //  li esa ul ni ichida joylashgan. li ni ichida button va span joylashgani uchun togridan-togri hammasi ul ni ichiga joylashadi.
    input.value=''  // add tugmasini bosganda yozuv pastga tushadi va matn kiritilishi kerak bolgan joy bosh qoladi.
    button.innerHTML='x' // matn ni o'chirishini bildiradigan belgi  X




button.addEventListener('click', function() {    //  X ni bosganda  matn o'chishi uchun 
    li.remove()     // aynan li ni o'chirilishiga sabab  span va button  li ni ichida joylashgani uchun. li ni remove() orqali ochiramiz.
})
}
})
}
sulton() // tepadagi function  chaqirildi
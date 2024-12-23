// task -1-----***

const food=['orange', 'mango', 'kathal','kola','apple']
console.log(food[3]);
food[2]="jambora"
console.log(food);

// task -2-----***

const place= ['cox-bazar','dhaka', 'sylhet',]
console.log(place);
place.push('khulna')
console.log(place);
place.push('brahmanbaria')
place.push('barishal')
console.log(place);
place.pop()
console.log(place);

// task -3-----***

const book=['english book', 'bangla book', 'physics book', 'javascript book']

console.log(book.includes('javascript book'));
console.log(book.includes('mathematics book'));
if (book.includes('javascript book')) {
    console.log('Gift javascript book');
    
}
else{
    console.log("No book");
    
}

// task -4-----***

const numbers=[12, 20, 15, 54, 60]
const name=['rohul','asif', 'rakib', 'siyam']
const no=50;
let age=20;

console.log(Array.isArray(numbers));
console.log(Array.isArray(name));
console.log(Array.isArray(no));
console.log(Array.isArray(age));
if (Array.isArray(numbers)) {
    console.log("GO to cox bazar");
    
}
else{
    console.log('Stay to home');
    
}


// task -5-----******

const data1=['Appal','Google', 'OpenAi']
const data2=['Html','Css', 'JavaScript']
console.log(data1);
console.log(data2);
console.log(data1.concat(data2));



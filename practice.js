// Logical oparator


// console.log('samour' || 3);
// console.log(false || undefined);

const resturnt = {
    fName: 'Fast',
    LName: 'food',
    doo: 'samour',
}

resturnt.Ldoo && console.log('helo');
resturnt.doo && console.log(resturnt.doo)
const gass = resturnt.doo ? resturnt.doo : 10;
console.log(gass);

const teaStall = function (suger,milk,...other){
    console.log(`Your tea is ready with ${suger} and ${milk}`)
}
const items = ['suger','milk','lemon','gingaer']
teaStall(...items)
// let num = 0;
const gest = resturnt.numBer ?? 10;
// console.log(gest)

// Resturent one 
const weeks = ['sat','sun','mon','tue'];
const res1 ={
    Name:'Khia lo bhai',
    Location:'Pahar tori',
    Items:['Bash','Mara','chaka'],
}
const res2 ={
    Name :'jamai khaibe ki sob tal',
    Location:'Lage na ',
    NumberOfItems: 45,
    res1,
    hello(){
        console.log(this.res1.Name)
    },
    openingHourse: {
        [weeks[0]]:{
            open:8,
            close:9,
        },
        [weeks[1]]:{
            open:9,
            close:10,
        },
        [weeks[2]]:{
            open:8,
            close:11,
        },
    }
}
// res2.hello()
console.log(res2.openingHourse.sun)

res1.NumberOfItems &&= 10;
res1.NumberOfItems &&= 46;
// console.log(res1)
// console.log(res2)
// res1.NumberOfItems ||= 10;
// console.log(res1)

res1.NumberOfItems ??= 10;
// console.log(res1)
let myName = 'samour';
myName =  'chandra' && myName ;
// console.log(myName)
console.log(res2.openingHourse.fri?.open )

console.log('hello this is samour chandra paul ')
// 1-prededct:undefined
console.log(example);
var example ="I'm the example!";

var example;
console.log(example);
example="I'm the example!";


console.log(hello);
var hello='world'

// 2-predect:magnet
var needle='haystack';
test();
function test(){
    var needle='magnet';
    console.log(needle);
}

// 3-predect:super cool
var breden='super cool';
function print(){
    breden='only okay';
    console.log(breden);
}
console.log(breden);

// 4-prediction:chicken,half-chicken
var food='chicken';
console.log(food);
eat();
function eat(){
    food='half-chicken';
    console.log(food);
    var food='gone';
}

// 5-pediction:chicken,fish,undefined
mean();
console.log(food);
var mean = function(){
    food='chicken';
    console.log(food);
    var food='fish';
    console.log(food);
}
console.log(food);


// 6-prediction:undefined,rock,r&b,disco
console.log(genre);
var genre ='disco';
rewind();
function rewind(){
    genre='rock';
    console.log(genre);
    var genre ='r&b';
    console.log(genre);
}
console.log(genre);

// 7-prediction:sanjose,seattle,burbank,sanjose
dojo='sanjose';
console.log(dojo);
learn();
function learn(){
    dojo='seattle';
    console.log(dojo);
    var dojo='burbank';
    console.log(dojo);
}
console.log(dojo);

// 8-prediction:{ name: 'Chicago', students: 65, hiring: true }
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}



const data = "java,Python,django";


const search = "python";

const skills = data.split(',');

var cased = skills.map(function(value){
    return value.toLowerCase();
});

let result = cased.includes(search.toLowerCase());

console.log(result);
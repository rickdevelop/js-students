
var student = {
  'first_name': 'Harry',
  'second_name': 'Potter',
  'age': 26,

}

for ( var source in student ) {
  console.log (source + ': ' + student[source]);
}

var studentArray = [

  {
    'first_name': 'Riccardo',
    'second_name': 'Salemi',
    'age': 26
  },

  {
    'first_name': 'Ajeje',
    'second_name': 'Brazov',
    'age': 40,
  },

  {
    'first_name': 'Aldo',
    'second_name': 'baglio',
    'age': 50,
  },

  {
    'first_name': 'Giovanni',
    'second_name': 'Storti',
    'age': 60,
  }

]

for (var i = 0; i < studentArray.length; i++) {
  console.log(i+1 + '. ' + studentArray[i].first_name + ' ' + studentArray[i].second_name);
}

var studentName = prompt("Inserisci il nome dello studente");
var studentSur = prompt("Inserisci il cognome dello studente");
var studentAge = parseInt(prompt("età studente "));

var Newstudent = function(first_name, second_name, age) {

  this.first_name = first_name;
  this.second_name = second_name;
  this.age = age;

}
var newName = new Newstudent(studentName, studentSur , studentAge);
console.log(newName);

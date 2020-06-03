<<<<<<< HEAD
const add = function(number1, number2){
	return number1 + number2;
  }
	number1 = parseInt(prompt("Please enter a number"));
  number2 = parseInt(prompt("Please enter another number"));
  const result = add(number1, number2);

alert(result);
=======
// $(document).ready(function() {
//     $(".clickable").click(function() {
//     $("#walrus-showing").toggle();
//     $("#walrus-hidden").toggle();
//   });
// });

$(document).ready(function() {
  $("#formOne").submit(function() {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    $("person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();
  });
});
>>>>>>> fc33d48... code practice 6/2/2020

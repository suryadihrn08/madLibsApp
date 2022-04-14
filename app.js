var chs = "Choose the";
var prmpt = [
  `1. ${chs} colour`,
  `2. ${chs} food`,
  `3. ${chs} number`,
  `4. ${chs} animal`,
  `5. ${chs} adjective`,
  `6. ${chs} tool`,
  `7. ${chs} vegetable`,
  `8. ${chs} container`,
  `9. ${chs} color`,
  `10. ${chs} object`,
  `11. ${chs} fruit -s`,
  `12. ${chs} candy -s`,
  `13. ${chs} sea animal`,
  `14. ${chs} verb - ing`,
  `15. ${chs} furniture`,
  `16. ${chs} color`,
  `17. ${chs} noun -s`,
  `18. ${chs} disease`,
];

// now store the user answers in an empty array
var result = []; // this is linked to input type text

// setting value to zero will have connection with first value in array
var crprm = 0;
var qst = document.getElementById("show-btn");
$(document).ready(function () {
  $(qst).click(function () {
    showNewPrompt();
  });
});
// now add the  function to the button click

function showNewPrompt() {
  // very first time when input vale is undefined we want to push the content in the array
  if (crprm != 0) {
    // only push to the array if there is an answer to push
    // this will pmss add value to the array if there the field is not blank or answer added
    result.push($("input").val());
  }

  // this will set to the first value of array prompt
  if (crprm < prmpt.length) {
    //alert($('input').val()); // when javascript loads the page this alertts undefined since there is no value in it
    $(".showStory").html(prmpt[crprm] + '<br><input type="text">');
    // update the current prompt variable
    crprm = crprm + 1;
  } else {
    arrayContent();
  }
}
// function to add all the contents in the array

function arrayContent() {
  $(".showStory").html(
    "<h2><img class='gbr' src='https://media.istockphoto.com/vectors/crazy-scientist-vector-id469400194?k=20&m=469400194&s=612x612&w=0&h=NbJai-i-6DvdJU_Bsn2zIfuehVSS-SSPXKeobLRi0W0='> My Substitute Teacher is a Mad Scientist</h2>" +
      `
      <p>Today we had a substitute teacher for science class, with <span>${result[0]}</span> hair covered in <span>${result[1]}</span> piled <span>${result[2]}</span> inches high. His name was Mr. <span>${result[3]}</span> and he said he'd show us why science was the most <span>${result[4]}</span> class. First, he used a <span>${result[5]}</span> and a <span>${result[6]}</span> to make a <span>${result[7]}</span> of water turn <span>${result[8]}</span>. Then he made a <span>${result[9]}</span> of the solar system using <span>${result[10]}</span>, <span>${result[11]}</span>, and a <span>${result[12]}</span>.</p>
      ` +
      `<p>When the principal walked by and saw the substitute teacher <span>${result[13]}</span> the <span>${result[14]}</span> with <span>${result[15]}</span> <span>${result[16]}</span>, she asked him to show the class a movie about <span>${result[17]}</span> instead. The next day, we had a different substitute teacher. And we never saw Billy again.</p>` +
      "<br/>" +
      'Based on Mad Scientist Mad Lib from <a href="https://www.woojr.com/" target="_blank">Woo! Jr. Kids Activities</a>'
  );
  // after all content is shown hide the button
  $(qst).hide();
}
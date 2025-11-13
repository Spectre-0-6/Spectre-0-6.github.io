const pbInputs = document.querySelectorAll('input[name="pb"]');
const pbEx = document.getElementById("pb-values");
pbEx.style.display = "none";

pbInputs.forEach(input => {
  input.addEventListener('change', function() {
    if(document.querySelector('input[name="pb"]:checked').value == "yes"){
      pbEx.style.display = "block";
    else:
      pbEx.style.display = "none";
    };
  });
});

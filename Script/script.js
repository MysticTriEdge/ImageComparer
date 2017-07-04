function updateTextInput(val) {
          document.getElementById('textInput').value=val; 
            changeOpacity(val);
        }


  var loadFileLeft = function(event) {
    var output = document.getElementById('leftimg');
    output.src = URL.createObjectURL(event.target.files[0]);
  };

  var loadFileRight = function(event) {
    var output = document.getElementById('rightimg');
    output.src = URL.createObjectURL(event.target.files[0]);
  };

function changeOpacity (opacity) {
    var imgchange = document.getElementById('rightimg');
    imgchange.style.opacity = opacity;
    
}

function overlayChange ()
{
   var rimg = document.getElementById('rightimg');
    
    if (document.getElementById('leftimg').className == "noOverlay")
        {
            document.getElementById('leftimg').className = "Overlay";
            rimg.className = "Overlay";
        }
    
    else if (document.getElementById('leftimg').className === "Overlay")
        {
            document.getElementById('leftimg').className = "noOverlay";
            rimg.className = "noOverlay";
        }
}
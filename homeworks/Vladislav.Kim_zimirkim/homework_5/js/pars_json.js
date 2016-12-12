(function() {
    var bio = document.querySelector('.bio')
        bioH1 = bio.querySelector('h1'),
        bioH2 = bio.querySelector('h2'),
        bioP = bio.querySelector('p');

    $.ajax({
        url: "js/text.json",
        type: 'GET',
        success: function(result) {
            var bioObject = result;
            bioH1.innerHTML = bioObject.bioH1;
            bioH2.innerHTML = bioObject.bioH2;
            bioP.innerHTML = bioObject.bioP;
        }
    });       

})();
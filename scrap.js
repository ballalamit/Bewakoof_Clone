var filtered = JSON.parse(localStorage.getItem("filtered-list")) || [];
dropdownMenu.addEventListener('click', function (event) {
    var selectedSize = event.target.innerHTML;

    // mydatabase.map(function (elem, ind) {
    //     if(elem.sizes[selectedSize] == true){
    //         if(filtered.indexOf(elem.sizes[selectedSize]) === -1) {
    //             event.target.style.color="red";
                
    //             filtered.push(elem);
                
    //         }
    //             ////
    //             // else if(filtered.indexOf(elem) !== -1  && ) {
    //                 else{
    //                 event.target.style.color="";
    //                 filtered = filtered.filter(function(e, i) {
    //                     return e !== elem;
    //                 });
    //             }

                
    //         ////
    //     }
    // });



    ///////////////


    <div class="dropdown">
                <span class="dropdown-toggle">Size &nbsp;&#x25BC;</span>
                <ul class="dropdown-menu">
                  <li>XS</li>
                  <li>S</li>
                  <li>M</li>
                  <li>L</li>
                </ul>
            </div>
var dropdownToggle = document.querySelector('.dropdown-toggle');
var dropdownMenu = document.querySelector('.dropdown-menu');

dropdownToggle.addEventListener('click', function () {
dropdownMenu.classList.toggle('show');
dropdownToggle.parentNode.classList.toggle('show');
});


////////////



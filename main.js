function search() {
    var searchbox = document.getElementById("searchbox");
    var filter = searchbox.value.toUpperCase();
    var produk = document.querySelectorAll("#produk");

    for (var i = 0; i < produk.length; i++) {
       var detail = produk[i].getElementsByClassName('detail') [0];
        var h2 =detail.getElementsByTagName('h2')[0];
        var txt_value = h2.textContent || h2.innerText;

        if(txt_value.toUpperCase().indexOf(filter) > -1 ) {
            produk[i].style.display ="";
        } else {
            produk[i].style.display = "none";
        }
    }
 
    }

    function search() {
        var searchbox = document.getElementById("searchbox");
        var filter = searchbox.value.toUpperCase();
        var produk = document.querySelectorAll("#produk");

        for (var i = 0; i < produk.length; i++) {
           var detail = produk[i].getElementsByClassName('detail') [0];
            var h2 =detail.getElementsByTagName('h2')[0];
            var txt_value = h2.textContent || h2.innerText;

            if(txt_value.toUpperCase().indexOf(filter) > -1 ) {
                produk[i].style.display ="";
            } else {
                produk[i].style.display = "none";
            }
        }
    }

           function search() {
        var searchbox = document.getElementById("searchbox")
        var value_searchbox = searchbox.value.toUpperCase()
        var produk = document.querySelectorAll("#produk")


        for(var i = 0; i < produk.lenght; i++) {
            var detail = produk[i].getElementsByClassName("detail") [0];
            var h2 = detail.getElementsByTagName("h2")[0];
            var txt_v= h2.textContent|| h2.innerText

            if(txt_v.toUpperCase().indexOf(value_searchbox) > -1) {
                produk[i].style.display = "";
            } else {
                produk[i].style.display = "none";
            }
        }
        }
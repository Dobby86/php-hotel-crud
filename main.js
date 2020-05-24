console.log("ciao");

function getAllPagamenti() {
    $.ajax({
        url: "index.php",
        method: "GET",
        success : function(data) {
            console.log(data);

            var target = $("#target");

            for (var pagamenti of data) {

        target.append('<li>' + pagamenti  + '</li>');

            }
        },
        error : function(err) {
            console.error(err);
        }
    })
}
function init (){
    getAllPagamenti();
}
$(document).ready(init);

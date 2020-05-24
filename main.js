console.log("ciao");

function getAllPagamenti() {
    $.ajax({
        url: "index.php",
        method: "GET",
        success : function(data) {
            console.log(data);

            var target = $("#target");

            for (var pagante of data) {

        target.append('<li>' + pagante  + '</li>');

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

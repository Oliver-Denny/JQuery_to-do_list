let count = 0;
function noitems() {
    if (count == 0) {
        $("#background").html("<div class='start'>Click on the <strong>+</strong> button to get started</div>");
    }
    else if (count == -1) {
        $("#background").html("<div class='end'>No more tasks? Happy days!</div>")
        $("#background").css({"height": "0px", "padding-top": "0px", "padding-bottom": "0px", "box-shadow": "0px 0px 0px 0px white"});
        count ++
    }
}
$(document).ready(() => {
    noitems();
});
function addevent() {
    if ($("#name").val() === '') {
        alert("You need to type something in the input field first!")
        return
    }
    count ++;
    if ($(".item").length == 0) {$("#background").html('');}
    $("#background").append("<div class='item'><div class='column input'></div><div id='spacer' class='column'></div><div id='bin' class='bin column row'>X</div></div>");
    $(".input").eq(count - 1).html($("#name").val());
    let heightplus = $("#background").height();
    $("#background").css({"height": parseInt(heightplus) + 55 + "px", "padding-top": "20px", "box-shadow": "0px 2px 4px 2px darkgray", "padding-bottom": "20px"});
    $("#name").val('');
}
$("#add").click(addevent);
$("#name").keypress((e) => {if (e.keyCode === 13) {addevent();}});
$("#background").click((event) => {
    if ($(event.target).attr('id') === "bin") {
        if ($(".item").length == 1) {
            $(event.target).parent().remove();
            count -= 2
            noitems();
        }
        else {
            $(event.target).parent().remove();
            let heightminus = $("#background").height();
            $("#background").css({"height": parseInt(heightminus) - 55 + "px"});
            count -= 1
        }
    }
    event.stopPropagation();
});
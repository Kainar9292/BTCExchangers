$("#slick_from").ddslick({
    width:"360px",
    background: "#ffffff",
    imagePosition: "left",
    selectText: "select your",
    onSelected: function (data) {
        $("#selected").html(data.selectedData.value);
    }
})
$("#slick_to").ddslick({
    width:"360px",
    background: "#ffffff",
    imagePosition: "left",
    selectText: "select your",
    onSelected: function (data) {
        $("#selected").html(data.selectedData.value);
    }
})
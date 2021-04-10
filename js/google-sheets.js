$(document).ready(function () {

    var spreadsheetID = "1_kvBqOw1ex3y2rGuv9QFJE-GJVrFTQszUe789W3OiFA";

    function get_data (sheetID, sheetOrder, cb) {
        var url = "https://spreadsheets.google.com/feeds/list/" + sheetID + "/" + sheetOrder + "/public/values?alt=json";
    
        $.getJSON(url, function(data) {
            if (data && data.feed.entry.length > 0) {
               cb(data.feed.entry);
            }
        });
    }
    
    // EMPLOYMENT HISTORY
    get_data(spreadsheetID, 1, function(data) {
        $(data).each(function(){
            $("#employment").append('<span>'+this.gsx$employer.$t+'<span><br>');
        });
    });


    // FOOTER ICONS
    get_data(spreadsheetID, 3, function(data) {
        $(data).each(function(){
            $("#footer-icons").append(
                '<a href="'+this.gsx$url.$t+'" target="_blank"> \
                    <i class="fa '+this.gsx$faiconcode.$t+' icon" aria-hidden="true"></i> \
                </a>'
            );
        });
    });
});

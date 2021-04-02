

$(document).ready(function () {

    var spreadsheetID = "1_kvBqOw1ex3y2rGuv9QFJE-GJVrFTQszUe789W3OiFA";

    function get_data (sheetID, cb) {
        var url = "https://spreadsheets.google.com/feeds/list/" + sheetID + "/1/public/values?alt=json";
        var result = null;
    
        $.getJSON(url, function(data) {
            if (data.feed.entry.length > 0) {
               cb(data.feed.entry);
            }
    
            return result;
        });
    }
    
    // EMPLOYMENT HISTORY
    get_data(spreadsheetID, function(data) {
        $(data).each(function(){
            $("#employment").append('<span>'+this.gsx$employer.$t+'<span><br>');
        });
    });
});



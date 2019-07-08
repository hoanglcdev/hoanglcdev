////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// jQuery
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
    $(".skill__progress").each(function(){
        var $this = $(this);
        var value = $this.attr("data-progress");
        console.log(value);
        $this.find(".skill__bar").text(value);
        $this.isInViewport(function(status) {
            if (status === "entered") {
                $this.find(".skill__bar").width(value);
            }
        });
    });

});
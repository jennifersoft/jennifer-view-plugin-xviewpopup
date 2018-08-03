require('../style/index.scss')

import jq from 'jquery'

jq(function() {
    aries.extension.setup({
        hostName: jq("input[name=hostName]").val(),
        apiToken: "jn49Pj3WQ4b"
    });

    aries.extension.api("instance", {
        domain_id: 7908
    }, function(res) {
        console.log(res);
    });

    setTimeout(function() {
        var txids = jq("#frm_plugin").find("input[name=txids]").val();
        var sid = jq("#frm_plugin").find("input[name=sid]").val();
        var stime = jq("#frm_plugin").find("input[name=stime]").val();
        var etime = jq("#frm_plugin").find("input[name=etime]").val();

        if(txids == "" || sid == -1 || stime == -1 || etime == -1) {
            jq("#xviewpopup-main").find(".message").html("All parameters are required.");
        } else {
            jq("#xviewpopup-main").find("#frm_plugin").attr("action", aries.extension.options.hostName + "/popup/xviewPointList").submit();
        }
    }, 1000);
});
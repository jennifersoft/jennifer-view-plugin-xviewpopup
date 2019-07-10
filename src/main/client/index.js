require('./index.scss')

import jq from 'jquery'
import extension from 'aries-extension-js'

jq(function() {
    extension.setup({
        hostName: jq("input[name=hostName]").val()
    });

    jq("body").height(jq(document).height());

    setTimeout(function() {
        var txids = jq("#frm_plugin").find("input[name=txids]").val();
        var sid = jq("#frm_plugin").find("input[name=sid]").val();
        var stime = jq("#frm_plugin").find("input[name=stime]").val();
        var etime = jq("#frm_plugin").find("input[name=etime]").val();

        if(!txids || !sid || !stime || !etime) {
            jq("#xviewpopup-main").find(".message").html("All parameters are required.");
        } else {
            jq("#xviewpopup-main").find("#frm_plugin").attr("action", extension.options.hostName + "/popup/xviewPointList").submit();
        }
    }, 1000);
});
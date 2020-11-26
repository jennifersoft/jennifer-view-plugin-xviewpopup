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
        var stime = jq("#frm_plugin").find("input[name=startTime]").val();
        var etime = jq("#frm_plugin").find("input[name=endTime]").val();

        const transactionIds = JSON.stringify({ [sid]: [txids] } )
        jq("#frm_plugin").append(
            "<input type='hidden' name='transactionIds' value='" + transactionIds + "' />"
        );

        const emptyArray = JSON.stringify([]);
        const emptyObject = JSON.stringify({});
        jq("#frm_plugin").append(
            "<input type='hidden' name='transactionCount' value='1' />"
        );
        jq("#frm_plugin").append(
            "<input type='hidden' name='transactionRows' value='" + emptyArray + "' />"
        );

        jq("#frm_plugin").append(
            "<input type='hidden' name='groupRows' value='"+emptyArray+"' />"
        );

        jq("#frm_plugin").append(
            "<input type='hidden' name='instanceOids' value='"+ emptyObject+"' />"
        );


        if(!txids || !sid || !stime || !etime) {
            jq("#xviewpopup-main").find(".message").html("All parameters are required.");
        } else {
            jq("#xviewpopup-main").find("#frm_plugin").attr("action", extension.options.hostName + "/popup/xviewAnalysis").submit();
        }
    }, 1000);
});
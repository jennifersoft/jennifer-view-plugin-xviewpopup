package com.aries.xviewpopup;

import com.aries.extension.starter.PluginController;
import com.aries.extension.util.PropertyUtil;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.math.BigInteger;

@Controller
public class XViewPopupController extends PluginController {

    @RequestMapping(value = { "/xviewpopup" }, method = RequestMethod.GET)
    @ResponseBody
    public ModelAndView getXViewPopupMainPage(@RequestParam(required=false, defaultValue="3000") short domainId,
                                              @RequestParam(required=false, defaultValue="-1") long searchTime,
                                              @RequestParam(required=false, defaultValue="-1") long txId,
                                              @RequestParam(required=false, defaultValue="0") int no,
                                              @RequestParam(required=false, defaultValue="") String session,
                                              @RequestParam(required=false, defaultValue="") String guid) {
        ModelAndView mav = new ModelAndView("templates/index.vm");
        ModelMap model = mav.getModelMap();

        model.put("hostName", PropertyUtil.getValue("xviewpopup", "hostName", "https://dev.jennifersoft.com"));

        if(session.equals("")) {
            if(searchTime != -1 && txId != -1) {
                XViewPopupParameter params = new XViewPopupParameter();
                params.setSearchTime(searchTime / 1000);
                params.setTxId(txId);
                params.setNo(no);
                params.setDomainId(domainId);
                params.setGuid("");
                model.put("xviewpopup_params", params);
            } else if(searchTime != -1 && !guid.equals("")) {
                XViewPopupParameter params = new XViewPopupParameter();
                params.setSearchTime(searchTime / 1000);
                params.setGuid(guid);
                model.put("xviewpopup_params", params);
            } else {
                model.put("xviewpopup_params", null);
            }
        } else {
            XViewPopupParameter params = parseSessionKey(session);

            if(params.getSearchTime() != -1 && params.getTxId() != -1) {
                model.put("xviewpopup_params", params);
            } else {
                model.put("xviewpopup_params", null);
            }
        }

        return mav;
    }

    private XViewPopupParameter parseSessionKey(String session) {
        String hexSearchTime = session.substring(0, 8);
        String hexTxId = session.substring(8, 24);

        XViewPopupParameter params = new XViewPopupParameter();
        params.setSearchTime(Long.parseLong(hexSearchTime, 16));
        params.setTxId(new BigInteger(hexTxId, 16).longValue());
        params.setNo(0);

        return params;
    }
}
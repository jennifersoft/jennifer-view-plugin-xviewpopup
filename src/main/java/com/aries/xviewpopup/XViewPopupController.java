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
    public ModelAndView getXViewPopupMainPage(@RequestParam(required=false, defaultValue="-1") short domainId,
                                              @RequestParam(required=false, defaultValue="-1") long searchTime,
                                              @RequestParam(required=false, defaultValue="-1") long txId,
                                              @RequestParam(required=false, defaultValue="0") int no,
                                              @RequestParam(required=false, defaultValue="") String session) {
        ModelAndView mav = new ModelAndView("templates/index.vm");
        ModelMap model = mav.getModelMap();

        model.put("hostName", PropertyUtil.getValue("xviewpopup", "hostName", "https://dev.jennifersoft.com"));

        if(!session.equals("")) {
            model.put("xviewpopup_params", parseSessionKey(session));
        } else if(domainId != -1 && searchTime != -1 && txId != -1) {
            XViewPopupParameter params = new XViewPopupParameter();
            params.setDomainId(domainId);
            params.setSearchTime(searchTime / 1000);
            params.setTxId(txId);
            params.setNo(no);

            model.put("xviewpopup_params", params);
        } else {
            model.put("xviewpopup_params", null);
        }

        return mav;
    }

    public static XViewPopupParameter parseSessionKey(String session) {
        String hexDomainId = session.substring(0, 8);
        String hexSearchTime = session.substring(8, 16);
        String hexTxId = session.substring(16, 32);
        String hexNo = session.substring(32, 40);

        XViewPopupParameter params = new XViewPopupParameter();
        params.setDomainId(Short.parseShort(hexDomainId, 16));
        params.setSearchTime(Long.parseLong(hexSearchTime, 16));
        params.setTxId(new BigInteger(hexTxId, 16).longValue());
        params.setNo(Integer.parseInt(hexNo, 16));

        return params;
    }
}
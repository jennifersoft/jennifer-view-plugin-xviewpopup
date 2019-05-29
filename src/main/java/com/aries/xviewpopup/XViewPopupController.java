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

@Controller
public class XViewPopupController extends PluginController {

    @RequestMapping(value = { "/xviewpopup" }, method = RequestMethod.GET)
    @ResponseBody
    public ModelAndView getXViewPopupMainPage(@RequestParam(required=false, defaultValue="-1") long searchTime,
                                              @RequestParam(required=false, defaultValue="-1") long txId,
                                              @RequestParam(required=false, defaultValue="0") int no) {
        ModelAndView mav = new ModelAndView("templates/index.vm");
        ModelMap model = mav.getModelMap();

        model.put("hostName", PropertyUtil.getValue("xviewpopup", "hostName", "https://dev.jennifersoft.com"));

        if(searchTime != -1 && txId != -1) {
            XViewPopupParameter params = new XViewPopupParameter();
            params.setSearchTime(searchTime / 1000);
            params.setTxId(txId);
            params.setNo(no);

            model.put("xviewpopup_params", params);
        } else {
            model.put("xviewpopup_params", null);
        }

        return mav;
    }
}
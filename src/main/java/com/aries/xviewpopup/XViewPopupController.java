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
    public ModelAndView getXViewPopupMainPage(@RequestParam(required=false, defaultValue="-1") short domainId, @RequestParam(required=false, defaultValue="-1") long startTime,
                                              @RequestParam(required=false, defaultValue="-1") long endTime, @RequestParam(required=false, defaultValue="") String txid) {
        ModelAndView mav = new ModelAndView("templates/index.vm");
        ModelMap model = mav.getModelMap();

        model.put("sid", domainId);
        model.put("stime", startTime);
        model.put("etime", endTime);
        model.put("txid", txid);
        model.put("hostName", PropertyUtil.getValue("xviewpopup", "hostName", "http://127.0.0.1:7900"));
        return mav;
    }
}
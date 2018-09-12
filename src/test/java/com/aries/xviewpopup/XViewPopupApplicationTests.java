package com.aries.xviewpopup;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class XViewPopupApplicationTests {

    private String createSessionKey(XViewPopupParameter param) {
        return String.format("%08x", param.getDomainId()) +
                String.format("%08x", param.getSearchTime() / 1000) +
                String.format("%016x",param.getTxId()) +
                String.format("%08x", param.getNo());
    }

    @Test
    public void testParameter() {
//        // 참고로 searchTime은 초단위로 변경되면서 끝에서 세자리가 000으로 변경됨
//        XViewPopupParameter testParams = new XViewPopupParameter();
//        testParams.setDomainId((short) 7908);
//        testParams.setSearchTime(1536648216792l);
//        testParams.setTxId(4752823727500760487l);
//        testParams.setNo(1);
//        String session = createSessionKey(testParams);
//        System.out.println("session : " + session);

        XViewPopupParameter params = XViewPopupController.parseSessionKey("00001ee45b97641841f56bffa5bb15a700000001");
        Assert.assertTrue(params.getDomainId() == 7908);
        Assert.assertTrue(params.getSearchTime() * 1000 == 1536648216000l);
        Assert.assertTrue(params.getTxId() == 4752823727500760487l);
        Assert.assertTrue(params.getNo() == 1);
    }
}

package com.aries.xviewpopup;

public class XViewPopupParameter {
    private long searchTime;
    private long txId;
    private int no;
    private String guid;
    private short domainId;

    public long getSearchTime() {
        return searchTime;
    }

    public void setSearchTime(long searchTime) {
        this.searchTime = searchTime;
    }

    public long getTxId() {
        return txId;
    }

    public void setTxId(long txId) {
        this.txId = txId;
    }

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public String getGuid() {
        return guid;
    }

    public void setGuid(String guid) {
        this.guid = guid;
    }

    public short getDomainId() {
        return domainId;
    }

    public void setDomainId(short domainId) {
        this.domainId = domainId;
    }
}

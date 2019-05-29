# X-View Pop-up 
This plugin allows you to run/open X-View pop-ups from external sources without authentication.

# Usage
## 1- Plug-in Installation
* Download the plug-in jar file from the [dist](https://github.com/jennifersoft/jennifer-view-plugin-xviewpopup/tree/master/dist) folder in this repository. (You can also clone the entire repository if you are planning to alter/modify the plug-in functionality)
* Login to your JENNIFER Dashboard and select `Adapter and Plugin` from the `Management Menu`.
* Select the `Labs` tab and click the `[+Add]` button.
* Make sure the `Classifications` is set to `page`.
* Enter `xviewpopup` in the ID field.
* Click the `Select a file` button to open the file upload dialogue and select the plug-in JAR file.
* Click the `[Save]` button to add the plug-in
![Image](https://user-images.githubusercontent.com/3861725/49051956-429f8200-f22d-11e8-903e-f31f5e90ca71.png)

* Click on the newly added plugin from the table list to open the option panel.
* Click the `Options` button.
* Add JENNIFER Server URL information using the `hostName` key.
![Image](https://user-images.githubusercontent.com/3861725/49052185-1afce980-f22e-11e8-83bb-c37a9a19d821.png)
* After saving the options, restart JENNIFER View server to complete the instalation.

## 2- Generating Share URL
In order to use the plug-in, you will need to generate a Share URL first. 
* From JENNIFER Dashboard, select `Screen Settings` located under the user menu.
* Select Labs/X-View Popup from the drop-down menu
* Click the `Share` button to generate the Share URL.
* Save the Share URL for later use.
![Image](https://user-images.githubusercontent.com/3861725/49052531-a034ce00-f22f-11e8-9717-4bc9867da3e6.png)

## 3- Using the plug-in
To use the plug-in, you will need to use the Share URL generated in the previous step and append the following paramters to it. 

| Parameter | Description | Sample Value |
|:-------|-------|-------:|
| txId | The transaction ID  | 9054121855462816943 |
| searchTime | Search time for for the transaction | 1543282731313 |

The full URL should look like the following 
```
http://jennifer.server:7900/login/redirect?token=O3TTxSAWafX&txId=-9054121855462816943&domainId=1000&searchTime=1543282731313
```

Once you access the URL in the browser, JENNIFER X-View pop-up will open showing the transaction's details.

> Note: the token is auto generated when you create the Share URL. You do not need to manually generate a token.


# Modifying the plug-in

If you wish to modify/alter the plug-in behavior, clone this repo and setup your development environment.

Enter the command as follows.

 1. git clone https://github.com/jennifersoft/jennifer-view-plugin-tutorial.git 
 2. cd jennifer-view-plugin-tutorial
 3. mvn install
 4. npm install
 5. Running in development tools
 6. npm start
 
 If you modify the js or scss file in the 'src/main/resources/static/*' directory, it will be automatically bundled.
 
Test URL : http://localhost:3000/plugin/xviewpopup


for more information about Plug-in development please refer to [Developer Guide](https://github.com/jennifersoft/jennifer-view-plugin-tutorial)
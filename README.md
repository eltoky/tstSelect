# tstSelect
Test Select Bug for Ionic 4

The bug looks like triggered by the fact that the value for ion-select are dynamically fetched from a json file


## Test flow
All test done in chrome (same issue on iphone) with iphone mode in dev mode.

**Running application**
We can see here that the application does not show the default value
![start](https://raw.githubusercontent.com/eltoky/tstSelect/master/img1.png)

**Clicking on the select button**
We can see here that the value is displayed on top of the label. Just press OK button (do not select a new value)
![select](https://raw.githubusercontent.com/eltoky/tstSelect/master/img2.png)

**Text not displayed correctly**
After clicking only OK we can see that the default value is now shown wrongly
![error](https://raw.githubusercontent.com/eltoky/tstSelect/master/img3.png)

**Selecting a new value**
When selecting a new value, the display looks correct
![ok](https://raw.githubusercontent.com/eltoky/tstSelect/master/img4.png)




# PROJECT 39 
### INTERNET CONNECTION STATUS

Motto of ours Project Repo is to learn about **Web Development**
###### Overview
> In This Project we are learning new method of javascript which is knows as [Navigator.Online](http://https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine "Navigator.Online")

> Website has a simple design as we are only here for js method 

### CODES
###### HTML
```html
    <div class="Status">
        <h1>Sample Message</h1>
    </div>
```
>- HTML  file contains one div of className Status  and one h1 tag in it.

##### JS
Selecting container
```javascript
const message = document.querySelector(".Status")
```
Simple if else ladder on the basis of boolean return from navigator.online method apply on window object 

```javascript
if(window.navigator.onLine){
    messageOnline();
}else{
    messageOffline();
}
```
Event Listener on window object to detect internet status 
```javascript
window.addEventListener("online",messageOnline)
window.addEventListener("offline",messageOffline)
```
> There are two ways to display changes of container 
> **METHOD 1**
Which is to simply add css 
```javascript
function messageOnline(){
     message.textContent = "Internet Connection Available"
     message.style.cssText = `
     background-color: rgb(219, 245, 219);
     color: #033103;
     box-shadow: 0 0 14px 1px #033103;`
}
```
> **METHOD 2 **
- Add class with the help of classList functionality 
- We have to remove previous class as it does not  going to remove itself 

```javascript
function messageOnline(){
    message.textContent = "Internet Connection Available"
    message.classList.remove("Internet-Not_available")
    message.classList.toggle("Internet-available")
}

function messageOffline(){
    message.textContent = "No Internet Connection "
    message.classList.remove("Internet-available")
    message.classList.toggle("Internet-Not_available")
}
```


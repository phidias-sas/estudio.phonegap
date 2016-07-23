window.addEventListener('WebComponentsReady', function() {
    window.open = cordova.InAppBrowser.open;
    
    // Hide splash screen
    navigator.splashscreen.hide();
});
// devtools.js

(function() {
    // Check if the user is in the browser's developer tools
    const devToolsOpened = () => {
        const devtools = /./;
        devtools.toString = function() {
            this.opened = true;
        };
        console.log(devtools);
        return devtools.opened;
    };

    // Show message if developer tools are open
    if (devToolsOpened()) {
        console.log("IF YOU ARE NOT A DEVELOPER, GET OUT!");
        console.log("This tool is made for developers. If you don't know anything, then GET OUT.");
        console.log("If someone told you to paste something here, they are probably scamming you.");
        console.log("Support: https://bartosz8291.github.io/the-simple-batch-calculator/contact");
    }
})();

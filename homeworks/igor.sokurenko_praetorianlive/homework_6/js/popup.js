function Popup(wihdow) {
    this.$windowObj = $(wihdow);
    this.$textObj = this.$windowObj.find("#input_popup");
    this.$buttonObj = this.$windowObj.find("#submit");
    this.$replacementObj;
    this.popUpHide(); 
    this.listenEvents(); 
}
Popup.prototype = {
    popUpShow: function() {
        this.$windowObj.show();
    },
    
    popUpHide: function() {
        this.$windowObj.hide();
    },
    
    setText: function(str) {
        this.$textObj.val(str);
    },
    
    setReplacementObj: function(replacementObj) {
        this.$replacementObj = replacementObj;
    },
    
    listenEvents: function() {
        this.$buttonObj.on('click', function() {
            this.$replacementObj.html(this.$textObj.val());
            this.popUpHide(); 
        }.bind(this));
    },
    
    offEvents: function() {
        this.$buttonObj.off('click', function() {
            this.$replacementObj.html(this.$textObj.val());
        }.bind(this));
    },
    
    remove: function() {
        this.offEvents();
        this.$windowObj.remove();
        this.$textObj.remove();
        this.$buttonObj.remove();
        this.$replacementObj.remove();
    }
};
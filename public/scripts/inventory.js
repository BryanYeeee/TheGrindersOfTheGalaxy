var Inventory = {
    init: function () {
        this.inv = $('<div>').attr({
            id: 'inventory'
        });

        this.inv.prependTo('div#main')
        this.setItem('wood',4)
        this.setItem('stone',5)
        this.setItem('stone',5)
        this.addItem('stone',5)
    },

    addItem: function(type, amount) {
        console.log(type)
        if(typeof amount != 'number') return;
        if(amount != null) {
            if(sm.get('inv.'+type)==0){
                sm.set('inv.'+type, 0);
                this.printInventory(type)
            }
            sm.add('inv.'+type, amount);
            this.updateInventory(type)
        }
    },
    setItem: function(type, amount) {
        if(typeof amount != 'number') return;
        if(amount != null) {

            if(sm.get('inv.'+type)==0){

                sm.set('inv.'+type, 0);
                console.log(sm.get('inv.'+type))
                this.printInventory(type)
            }
            sm.set('inv.'+type, amount);
            this.updateInventory(type)
        }
    },

    printInventory: function(type) {
        let slot = $('<div>').addClass('inventorySlot').css('opacity', '0').prependTo('div#inventory')

        console.log(sm.get('inv.'+type))
        let number = $('<div>').addClass('invNumber invText').text(sm.get('inv.'+type)).attr({id: type}).prependTo(slot)
        let name = $('<div>').addClass('invName invText').text(type).prependTo(slot)

        slot.animate({opacity: 1}, 500, 'linear', function() {
            // EventLog.clearHidden();
        });

    },
    updateInventory: function(type){
        $('#'+type).text(sm.get('inv.'+type))

    }
}
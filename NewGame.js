// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this.node);
    },

    onKeyDown: function(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.left:
                console.log("Left Pressed");
                this.x -= 100;
                break;
            case cc.macro.KEY.right:
                console.log("RIGHT Pressed");
                break;
            case cc.macro.KEY.down:
                console.log("Down Pressed");
                break;
            case cc.macro.KEY.up:
                console.log("Up Pressed");
                break;
        }
    }
    

    // update (dt) {},
});

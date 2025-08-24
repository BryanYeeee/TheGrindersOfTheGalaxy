
const earthActions = (doActions) => {
    actions = {
        takeStep: function () {
            doActions("hello", ()=>{
                console.log("custom code")
            })
        }
    }
    return actions
}

export default earthActions
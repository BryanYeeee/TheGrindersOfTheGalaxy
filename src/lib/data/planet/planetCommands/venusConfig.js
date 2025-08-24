
export const venusCommands = (doCommands) => {
    const commands = {
        takeStep: function () {
            doCommands([
                "die",
                ()=>{
                console.log("ud ied")
            }])
        },
        extractCarbon: function () {
            doCommands([
                "weenus",
                ()=>{
                console.log("whee")
            }])
        }
    }
    return commands
}

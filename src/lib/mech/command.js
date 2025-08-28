export const Command = {
    cooldown: null,
    cooldownFn: null,
    unlock: null,
    unlockFn: null,

    setCooldownFunction(cooldown, cooldownFn) {
        [this.cooldown, this.cooldownFn] = [
            cooldown,
            (cmd, value) =>
                cooldownFn(prev => ({ ...prev, [cmd]: value }))
        ];

    },

    setUnlockFunction(unlock, unlockFn) {
        [this.unlock, this.unlockFn] = [
            unlock,
            (cmd, value) =>
                unlockFn(prev => ({ ...prev, [cmd]: value }))
        ];
    },

    startCooldown(cmd, duration) {
        if (!this.cooldownFn || this.isOnCooldown(cmd)) return;

        this.cooldownFn(cmd, true);
        setTimeout(() => {
            this.cooldownFn(cmd, false);
        }, duration);
    },

    isOnCooldown(cmd) {
        if (!this.cooldown) return false;
        return !!this.cooldown[cmd];
    },

    lockCommand(cmd) {
        if (this.unlockFn) {
            this.unlockFn(cmd,false)
        }
    },

    unlockCommand(cmd) {
        if (this.unlockFn) {
            this.unlockFn(cmd,true)
        }
    },

    isUnlocked(cmd) {
        if (!this.unlock) return false;
        return !!this.unlock[cmd];
    }

};

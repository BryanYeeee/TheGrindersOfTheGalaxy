export const Cooldown = {
    cooldown: null,
    cooldownFn: null,

    setCooldownFunction(cooldown, cooldownFn) {
        [this.cooldown, this.cooldownFn] = [
            cooldown,
            (cmd, value) =>
                cooldownFn(prev => ({ ...prev, [cmd]: value }))
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

};

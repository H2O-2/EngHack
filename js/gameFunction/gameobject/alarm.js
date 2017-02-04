
var Alarm = function () {

    this.current = 0;
    this.active = false;
    this.interval;

    this._init = function(interval) {
        this.interval = interval;
        this.active = true;
    }

    this._tick = function() {
        if (this.active === true) {
            ++this.current;
            if (this.interval === this.current) {
                this.active = false;
                this.current = false;
                return true;
            } else {
                return false;
            }
        }
        return null;
    }

}
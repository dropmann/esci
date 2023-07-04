    module.exports = {

        view_updated: function (ui, event) {
            ui.alpha.setValue((1 - Number(ui.conf_level.value()) / 100).toPrecision(1));
        },

        view_loaded: function (ui, event) {
            ui.alpha.setValue((1 - Number(ui.conf_level.value()) / 100).toPrecision(1));
        },

        conf_level_changed: function(ui, event) {
            ui.alpha.setValue((1 - Number(ui.conf_level.value())/100).toPrecision(1));
        }
    };

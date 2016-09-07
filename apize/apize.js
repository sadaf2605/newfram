var method = Apize.prototype;

function Apize() {

}

method.define = function(model_name, attributes) {
    this._model_name = model_name;
    this._fields_json = fields_json;
};

method.getModelName = function() {
    return this._model_name;
};


//Model.prototype
module.exports = Apize
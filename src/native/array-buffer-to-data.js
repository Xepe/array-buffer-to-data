(function() {
    'use strict';

    var root = this;

    var arrayBufferToData = {
        toBase64: function (arrayBuffer) {
            var binary = '';
            var bytes = new Uint8Array(arrayBuffer);
            var len = bytes.byteLength;
            for (var i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return window.btoa(binary);
        },

        toString: function (arrayBuffer) {
            var base64 = this.toBase64(arrayBuffer);

            return decodeURIComponent(escape(window.atob(base64)));
        },

        toJSON: function (arrayBuffer) {
            try {
                var string = this.toSting(arrayBuffer);
                return JSON.parse(string);
            }
            catch (e) {
                return {};
            }
        }
    };

    if (typeof module !== "undefined" && module.exports) {
        module.exports = arrayBufferToData;
    } else {
        root.arrayBufferToData = arrayBufferToData;
    }
}).call(this);
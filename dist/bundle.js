(() => {
  "use strict";
  var e = {
      607: function (e, t, r) {
        var o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = o(r(54)),
          u = document.getElementById("root");
        new n.default("Hello ").sayHello(u);
      },
      54: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function () {
          function e(e) {
            this.message = e;
          }
          return (
            (e.prototype.sayHello = function (e) {
              e && (e.innerText = this.message);
            }),
            e
          );
        })();
        t.default = r;
      },
    },
    t = {};
  !(function r(o) {
    if (t[o]) return t[o].exports;
    var n = (t[o] = { exports: {} });
    return e[o].call(n.exports, n, n.exports, r), n.exports;
  })(607);
})();

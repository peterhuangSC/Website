(function (t) {
	function e(e) {
		for (var r, i, s = e[0], l = e[1], c = e[2], f = 0, p = []; f < s.length; f++) i = s[f], Object.prototype.hasOwnProperty.call(o, i) && o[i] && p.push(o[i][0]), o[i] = 0;
		for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (t[r] = l[r]);
		u && u(e);
		while (p.length) p.shift()();
		return a.push.apply(a, c || []), n()
	}

	function n() {
		for (var t, e = 0; e < a.length; e++) {
			for (var n = a[e], r = !0, s = 1; s < n.length; s++) {
				var l = n[s];
				0 !== o[l] && (r = !1)
			}
			r && (a.splice(e--, 1), t = i(i.s = n[0]))
		}
		return t
	}
	var r = {},
		o = {
			app: 0
		},
		a = [];

	function i(e) {
		if (r[e]) return r[e].exports;
		var n = r[e] = {
			i: e,
			l: !1,
			exports: {}
		};
		return t[e].call(n.exports, n, n.exports, i), n.l = !0, n.exports
	}
	i.m = t, i.c = r, i.d = function (t, e, n) {
		i.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: n
		})
	}, i.r = function (t) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, i.t = function (t, e) {
		if (1 & e && (t = i(t)), 8 & e) return t;
		if (4 & e && "object" === typeof t && t && t.__esModule) return t;
		var n = Object.create(null);
		if (i.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for (var r in t) i.d(n, r, function (e) {
				return t[e]
			}.bind(null, r));
		return n
	}, i.n = function (t) {
		var e = t && t.__esModule ? function () {
			return t["default"]
		} : function () {
			return t
		};
		return i.d(e, "a", e), e
	}, i.o = function (t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, i.p = "";
	var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
		l = s.push.bind(s);
	s.push = e, s = s.slice();
	for (var c = 0; c < s.length; c++) e(s[c]);
	var u = l;
	a.push([0, "chunk-vendors"]), n()
})({
	0: function (t, e, n) {
		t.exports = n("56d7")
	},
	"034f": function (t, e, n) {
		"use strict";
		var r = n("85ec"),
			o = n.n(r);
		o.a
	},
	"4f65": function (t, e, n) {
		"use strict";
		var r = n("79dc"),
			o = n.n(r);
		o.a
	},
	"56d7": function (t, e, n) {
		"use strict";
		n.r(e);
		n("e260"), n("e6cf"), n("cca6"), n("a79d");
		var r = n("2b0e"),
			o = function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					attrs: {
						id: "app"
					}
				}, [n("Background"), n("Navbar"), n("Content")], 1)
			},
			a = [],
			i = function () {
				var t = this,
					e = t.$createElement;
				t._self._c;
				return t._m(0)
			},
			s = [function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "navbar"
				}, [n("ul", {
					staticClass: "nav-container"
				}, [n("li", {
					attrs: {
						id: "logo"
					}
				}, [n("a", {
					attrs: {
						href: "#"
					}
				}, [t._v("Boonco")])]), n("li", {
					staticClass: "navbar-item"
				}, [n("a", {
					attrs: {
						href: "#"
					}
				}, [t._v("About")])]), n("li", {
					staticClass: "navbar-item"
				}, [n("a", {
					attrs: {
						href: "mailto:boonco.owner@gmail.com?subject=Boonco Alpha Tester"
					}
				}, [t._v("Alpha Test")])])])])
			}],
			l = {
				name: "Navbar"
			},
			c = l,
			u = (n("962e"), n("2877")),
			f = Object(u["a"])(c, i, s, !1, null, "24919d5c", null),
			p = f.exports,
			d = function () {
				var t = this,
					e = t.$createElement,
					r = t._self._c || e;
				return r("div", {
					staticClass: "content"
				}, [r("img", {
					staticClass: "iphone",
					attrs: {
						src: n("e0a9")
					}
				}), r("div", {
					staticClass: "text-stack"
				}, [t._m(0), r("transition", {
					attrs: {
						name: "fade",
						mode: "out-in"
					}
				}, [r("div", {
					key: t.description
				}, [r("p", {
					domProps: {
						innerHTML: t._s(t.description)
					}
				})])]), t._m(1)], 1)])
			},
			h = [function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("h1", [t._v(" Life is filled with boons. "), n("br"), t._v("Share with your neighbours. ")])
			}, function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "coming-soon"
				}, [n("p", [t._v("Available on the App Store January 2021 (UW and UWO campuses).")])])
			}],
			v = (n("a4d3"), n("e01a"), {
				name: "Content",
				data: function () {
					return {
						descriptions: ["Browse what others are offering. If you can’t find what <br/>you want, create a bounty and watch the boons roll in.", "boon <br/>[bo͞on]  noun <br/>1. a thing that is helpful or beneficial. <br/>2. a favor or request."],
						index: 0,
						description: ""
					}
				},
				methods: {
					updateDesc: function () {
						console.log(this.index), this.index = 0 == this.index ? 1 : 0, this.description = this.descriptions[this.index]
					}
				},
				created: function () {
					console.log("TEST"), this.updateDesc(), setInterval(this.updateDesc, 5e3)
				}
			}),
			b = v,
			m = (n("af1f"), Object(u["a"])(b, d, h, !1, null, "c9553fc6", null)),
			C = m.exports,
			g = function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", {
					staticClass: "background"
				}, [n("svg", {
					attrs: {
						viewBox: "0 0 1442 1099",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}
				}, [n("g", {
					attrs: {
						filter: "url(#filter0_d)"
					}
				}, [n("path", {
					attrs: {
						"fill-rule": "evenodd",
						"clip-rule": "evenodd",
						d: "M494.269 -703.489C583.019 -809.257 740.708 -823.054 846.477 -734.303L1633.81 -73.6505C1739.58 15.1 1753.38 172.789 1664.63 278.557L1440 546.257V600.5C1399.3 603.411 1381.98 621.829 1353.47 652.155C1347.7 658.292 1341.47 664.917 1334.5 672L1335.6 670.681L1129.51 916.285C1040.76 1022.05 883.07 1035.85 777.302 947.099L303.405 549.453C304.624 550.492 305.818 551.505 306.987 552.489L296.377 543.555L267.068 518.962C211.811 475.131 126.198 423.682 0 449V294.865L-10.0335 286.446C-115.802 197.696 -129.598 40.007 -40.8477 -65.7617L494.269 -703.489Z",
						fill: "url(#paint0_linear)"
					}
				}), n("path", {
					attrs: {
						"fill-rule": "evenodd",
						"clip-rule": "evenodd",
						d: "M494.269 -703.489C583.019 -809.257 740.708 -823.054 846.477 -734.303L1633.81 -73.6505C1739.58 15.1 1753.38 172.789 1664.63 278.557L1440 546.257V600.5C1399.3 603.411 1381.98 621.829 1353.47 652.155C1347.7 658.292 1341.47 664.917 1334.5 672L1335.6 670.681L1129.51 916.285C1040.76 1022.05 883.07 1035.85 777.302 947.099L303.405 549.453C304.624 550.492 305.818 551.505 306.987 552.489L296.377 543.555L267.068 518.962C211.811 475.131 126.198 423.682 0 449V294.865L-10.0335 286.446C-115.802 197.696 -129.598 40.007 -40.8477 -65.7617L494.269 -703.489Z",
						fill: "url(#paint1_linear)",
						"fill-opacity": "0.5"
					}
				})]), n("path", {
					attrs: {
						opacity: "0.06",
						"fill-rule": "evenodd",
						"clip-rule": "evenodd",
						d: "M488.011 -691.388C576.762 -797.157 734.451 -810.953 840.219 -722.203L1645.59 -46.4182C1751.36 42.3323 1765.15 200.021 1676.4 305.79L1441.5 585.735V640.5C1400.52 643.431 1383.24 661.734 1354.38 692.321C1348.78 698.259 1342.74 704.659 1336 711.5L1340.77 705.776L1128.09 959.245C1039.34 1065.01 881.649 1078.81 775.88 990.059L268.243 564.101C216.755 523.07 128.454 470.247 3.8147e-05 496.5V339.019L-29.4888 314.275C-135.257 225.524 -149.053 67.8354 -60.3028 -37.9333L488.011 -691.388Z",
						fill: "#7A3355"
					}
				}), n("path", {
					attrs: {
						opacity: "0.05",
						"fill-rule": "evenodd",
						"clip-rule": "evenodd",
						d: "M474.01 -643.389C562.761 -749.157 720.45 -762.953 826.219 -674.203L1634.05 3.65149C1739.82 92.402 1753.62 250.091 1664.87 355.859L1440.5 623.251V674C1401.46 676.792 1382.67 697.345 1355.63 726.903C1349.37 733.758 1342.65 741.097 1335.14 748.811L1116.55 1009.31C1027.8 1115.08 870.115 1128.88 764.346 1040.13L252.163 610.356C199.709 569.702 118.959 521.781 3.05176e-05 543V399L68.9628 456.633L-43.4893 362.275C-149.258 273.524 -163.054 115.835 -74.3034 10.0666L474.01 -643.389Z",
						fill: "#7A3355"
					}
				}), n("defs", [n("filter", {
					attrs: {
						id: "filter0_d",
						x: "-111.342",
						y: "-800.798",
						width: "1846.46",
						height: "1822.39",
						filterUnits: "userSpaceOnUse",
						"color-interpolation-filters": "sRGB"
					}
				}, [n("feFlood", {
					attrs: {
						"flood-opacity": "0",
						result: "BackgroundImageFix"
					}
				}), n("feColorMatrix", {
					attrs: { in: "SourceAlpha",
						type: "matrix",
						values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					}
				}), n("feOffset", {
					attrs: {
						dy: "4"
					}
				}), n("feGaussianBlur", {
					attrs: {
						stdDeviation: "6"
					}
				}), n("feColorMatrix", {
					attrs: {
						type: "matrix",
						values: "0 0 0 0 0.491406 0 0 0 0 0.6375 0 0 0 0 0.628734 0 0 0 0.4 0"
					}
				}), n("feBlend", {
					attrs: {
						mode: "normal",
						in2: "BackgroundImageFix",
						result: "effect1_dropShadow"
					}
				}), n("feBlend", {
					attrs: {
						mode: "normal",
						in: "SourceGraphic",
						in2: "effect1_dropShadow",
						result: "shape"
					}
				})], 1), n("linearGradient", {
					attrs: {
						id: "paint0_linear",
						x1: "26",
						y1: "50.5",
						x2: "1282.5",
						y2: "739.5",
						gradientUnits: "userSpaceOnUse"
					}
				}, [n("stop", {
					attrs: {
						"stop-color": "#311221"
					}
				}), n("stop", {
					attrs: {
						offset: "0.196379",
						"stop-color": "#351525"
					}
				}), n("stop", {
					attrs: {
						offset: "0.48209",
						"stop-color": "#471C31"
					}
				}), n("stop", {
					attrs: {
						offset: "0.98029",
						"stop-color": "#84375C"
					}
				})], 1), n("linearGradient", {
					attrs: {
						id: "paint1_linear",
						x1: "1426.5",
						y1: "11.5001",
						x2: "976.5",
						y2: "993",
						gradientUnits: "userSpaceOnUse"
					}
				}, [n("stop", {
					attrs: {
						offset: "0.00808458",
						"stop-color": "#58203B"
					}
				}), n("stop", {
					attrs: {
						offset: "1",
						"stop-color": "#95456B"
					}
				})], 1)], 1)])])
			},
			_ = [],
			y = {
				name: "Background"
			},
			L = y,
			x = (n("4f65"), Object(u["a"])(L, g, _, !1, null, "9b738d34", null)),
			w = x.exports,
			O = {
				name: "App",
				components: {
					Navbar: p,
					Background: w,
					Content: C
				},
				watch: {
					$route: function (t) {
						document.title = "Get Boonco | The Sharing App";
						var e = document.querySelector("[rel='icon']");
						e.setAttribute("href", t.meta.icon)
					}
				}
			},
			S = O,
			B = (n("034f"), Object(u["a"])(S, o, a, !1, null, null, null)),
			j = B.exports;
		r["a"].config.productionTip = !1, new r["a"]({
			render: function (t) {
				return t(j)
			}
		}).$mount("#app")
	},
	"79dc": function (t, e, n) {},
	"85ec": function (t, e, n) {},
	"962e": function (t, e, n) {
		"use strict";
		var r = n("f431"),
			o = n.n(r);
		o.a
	},
	"9b7f": function (t, e, n) {},
	af1f: function (t, e, n) {
		"use strict";
		var r = n("9b7f"),
			o = n.n(r);
		o.a
	},
	e0a9: function (t, e, n) {
		t.exports = n.p + "img/iphone-preview.242e3e56.png"
	},
	f431: function (t, e, n) {}
});
//# sourceMappingURL=app.38de6d78.js.map
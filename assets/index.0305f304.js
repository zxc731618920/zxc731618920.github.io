import {
    d,
    r as p,
    o as h,
    a as _,
    c as f,
    b as t,
    t as i,
    F as m,
    p as v,
    e as g,
    f as a,
    g as y,
    h as b,
} from "./vendor.45b4a027.js"
const V = function() {
    const s = document.createElement("link").relList
    if (s && s.supports && s.supports("modulepreload")) return
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) r(e)
    new MutationObserver((e) => {
        for (const o of e)
            if (o.type === "childList")
                for (const u of o.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && r(u)
    }).observe(document, { childList: !0, subtree: !0 })

    function l(e) {
        const o = {}
        return (
            e.integrity && (o.integrity = e.integrity),
            e.referrerpolicy && (o.referrerPolicy = e.referrerpolicy),
            e.crossorigin === "use-credentials" ?
            (o.credentials = "include") :
            e.crossorigin === "anonymous" ?
            (o.credentials = "omit") :
            (o.credentials = "same-origin"),
            o
        )
    }

    function r(e) {
        if (e.ep) return
        e.ep = !0
        const o = l(e)
        fetch(e.href, o)
    }
}
V()
var k = "/assets/logo.03d6d6da.png"
var S = (n, s) => {
    const l = n.__vccOpts || n
    for (const [r, e] of s) l[r] = e
    return l
}
const c = (n) => (v("data-v-e151773c"), (n = n()), g(), n),
    E = c(() =>
        t(
            "p",
            null, [
                a(" Recommended IDE setup: "),
                t("a", { href: "https://code.visualstudio.com/", target: "_blank" }, "VSCode"),
                a("+ "),
                t("a", { href: "https://github.com/johnsoncodehk/volar", target: "_blank" }, "Volar"),
            ], -1,
        ),
    ),
    x = c(() => t("p", null, [a(" See "), t("code", null, "README.md"), a("for more information. ")], -1)),
    D = c(() =>
        t(
            "p",
            null, [
                t(
                    "a", { href: "https://vitejs.dev/guide/features.html", target: "_blank" },
                    "Vite Docs",
                ),
                a("| "),
                t("a", { href: "https://v3.vuejs.org/", target: "_blank" }, "Vue 3 Docs"),
            ], -1,
        ),
    ),
    I = c(() =>
        t(
            "p",
            null, [
                a(" Edit "),
                t("code", null, "components/HelloWorld.vue"),
                a("to test hot module replacement. "),
            ], -1,
        ),
    ),
    N = d({
        props: { msg: null },
        setup(n) {
            const s = p(0),
                l = p("\u8BF7\u6C42\u4E2D...")
            return (
                h(() => {
                    fetch("https://175.178.71.74:11111/api")
                        .then((r) => r.json())
                        .then((r) => (l.value = r))
                        .catch((r) => (l.value = r))
                }),
                (r, e) => (
                    _(),
                    f(
                        m,
                        null, [
                            t("h1", null, i(l.value), 1),
                            t("h1", null, i(n.msg), 1),
                            E,
                            x,
                            D,
                            t(
                                "button", {
                                    type: "button",
                                    onClick: e[0] || (e[0] = (o) => s.value++),
                                },
                                "count is: " + i(s.value),
                                1,
                            ),
                            I,
                        ],
                        64,
                    )
                )
            )
        },
    })
var j = S(N, [
    ["__scopeId", "data-v-e151773c"]
])
const L = t("img", { alt: "Vue logo", src: k }, null, -1),
    O = d({
        setup(n) {
            return (s, l) => (_(), f(m, null, [L, y(j, { msg: "Hello Vue 3 + TypeScript + Vite" })], 64))
        },
    })
b(O).mount("#app")
import { gsap } from "gsap";

class Hero {
    constructor() {
        this.rowsParent = $(".hero__rows"),
            this.rows = this.rowsParent.find(".hero__row");
        let e = this;
        e.getRowHeight(),
            e.getCenter(),
            e.getVh()
    }
    getRowHeight() {
        const e = () => {
            let t = this.rows.outerHeight();
            this.rowsParent.css("--row", t)
        }
            ;
        e(),
            window.addEventListener("resize", () => {
                window.innerWidth < 479 || e()
            }
            )
    }
    getCenter() {
        this.rows = this.rows.eq(1);
        let e = this.rows.find(".hero__circle").eq(1);
        const t = () => {
            let r = e.width()
                , i = e[0].getBoundingClientRect().left + e.width() / 2 - window.innerWidth / 2;
            this.rows.css({
                "--center": `${i}px`,
                "--circle": `${r}px`
            })
        }
            ;
        t(),
            window.addEventListener("resize", () => {
                window.innerWidth < 479 || (this.rows.css({
                    "--center": "0px",
                    "--circle": "0px"
                }),
                    t())
            }
            )
    }
    getVh() {
        let e = window.innerHeight;
        $("html").css("--vh", `${e}`),
            window.addEventListener("resize", () => {
                window.innerWidth < 479 || (e = window.innerHeight,
                    $("html").css("--vh", `${e}`))
            }
            )
    }
}

class Loader {
    constructor(e, t) {
        this.isMobile = window.innerWidth <= 768;
        let r = $(".loader");
        gsap.set(r, {
            clipPath: "circle(0% at 50% 50%)"
        }),
            t.stop(),
            t.scrollTo(0, {
                force: !0,
                immediate: !0,
                offset: 0
            });
        let o = $("main")
            , i = $(".hero")
            , a = i.find(".hero__video")
            , h = i.find("h4")
            , d = o.find(".scroll-arrow__sticky")
            , c = $(".nav__logo")
            , w = $(".nav__list").children()
            , g = new n(h, {
                type: "lines, chars"
            });
        new p(a),
            new m,
            $("body").attr("theme", "black"),
            $("body").addClass("at-top"),
            $("body").addClass("is-home"),
            gsap.timeline({
                defaults: {
                    duration: .8,
                    ease: "power3"
                }
            }).set([o, $(".nav")], {
                autoAlpha: 1
            }).fromTo(g.chars, {
                opacity: 0
            }, {
                opacity: 1,
                stagger: .02,
                onStart: () => {
                    t.start(),
                        e()
                }
            }, .5).fromTo([c, w], {
                opacity: this.isMobile ? 1 : 0
            }, {
                opacity: 1,
                stagger: .2
            }, "<").fromTo(d, {
                opacity: 0
            }, {
                opacity: 1
            }, "<")
    }
}

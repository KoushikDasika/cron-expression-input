import { isValidCron as g } from "cron-validator";
import f from "cronstrue";
const u = {
  stepChoice: "Step",
  step: "Step",
  every: "Every",
  rangeChoice: "Range",
  min: "Min",
  max: "Max",
  Choice: "Choice",
  minute: "Minute",
  hours: "Hours",
  dayOfMonth: "Day of Month",
  month: "Month",
  daysOfWeek: "Days of week",
  invalidCron: "expression cron invalida, try with (* * * * *)",
  inputPlaceholder: "Cron Expression"
};
class m extends HTMLElement {
  constructor() {
    super();
  }
  Init(e) {
    this.state = e, this.state.props != null && this.state.props.forEach((a) => {
      this.state.self[a] = e.self.getAttribute(a);
    });
  }
  Create(e, a) {
    e.innerHTML = "";
    var t = document.createElement("div");
    t.innerHTML = a, e.appendChild(t);
  }
  getElements(e) {
    return this.state.self.querySelectorAll(e);
  }
  getElement(e) {
    return this.state.self.querySelector(e);
  }
  getNumber(e) {
    return e.toString().padStart(2, "0");
  }
  getHasZero() {
    return this.hasZero ? 0 : 1;
  }
  addEvent(e, a, t) {
    this.getElements(e).forEach(
      (i) => i.addEventListener(a, (r) => t(r.target))
    );
  }
  increaseBrightness(e, a) {
    e = e.replace(/^\s*#|\s*$/g, ""), e.length == 3 && (e = e.replace(/(.)/g, "$1$1"));
    var t = parseInt(e.substr(0, 2), 16), i = parseInt(e.substr(2, 2), 16), r = parseInt(e.substr(4, 2), 16);
    return "#" + (0 | 256 + t + (256 - t) * a / 100).toString(16).substr(1) + (0 | 256 + i + (256 - i) * a / 100).toString(16).substr(1) + (0 | 256 + r + (256 - r) * a / 100).toString(16).substr(1);
  }
}
function y(n, e) {
  return `
        <div>
            <style>
            cron-expression-input input[type="radio"]:checked:after { background-color: ${n.colorMain} !important; }
            cron-expression-input input[type="radio"] { border: 0.1em solid ${n.colorSecond} !important; }
            .container input:checked ~ .checkmark { background-color: ${n.colorSecond} !important; }
            </style>
            <form>
                <div style='display: flex; height: 138px;'>
                    <div class='panel panel-default' style='margin-right: 2.5px; width: 50%; height: 132px;'>
                        <div class='panel-heading'>
                            <div style='display: flex;'> <input class='propagationClass form-check-input' type='radio' name='Choice' value='1'
                                    match='Choice' checked> <span style='margin-left: 10px;'>${e.stepChoice}</span> </div>
                        </div>
                        <div class='panel-body' style='display: flex !important;'>
                            <div class='propagationClass form-group' style='margin-right: 5px; width: 50%;'> <label
                                    for='everySelect'>${e.every}</label> <select match='every' class='form-control'
                                    style='width: 100%;'>
                                    <option>*</option>
                                </select> </div>
                            <div class='form-group' style='margin-left: 5px; width: 50%;'> <label for='stepSelect'>${e.step}</label>
                                <select match='step' class='propagationClass form-control' style='width: 100%;'>
                                    <option>*</option>
                                </select> </div>
                        </div>
                    </div>
                    <div class='panel panel-default' style='margin-left: 2.5px; width: 50%; height: 132px;'>
                        <div class='panel-heading'>
                            <div style='display: flex;'> <input class='propagationClass form-check-input' type='radio' name='Choice' value='2'
                                    match='Choice'> <span style='margin-left: 10px;'>${e.rangeChoice}</span> </div>
                        </div>
                        <div class='panel-body'>
                            <div class='form-group'>
                                <div style='display: flex;'>
                                    <div style='width: 50%; margin-right: 5px;'> <label class='form-check-label'
                                            for='exampleRadios1'>${e.min}</label> <select match='rangeMin'
                                            class='propagationClass form-control' style='width: 100%;'>
                                        </select> </div>
                                    <div style='width: 50%; margin-right: 5px;'> <label class='form-check-label'
                                            for='exampleRadios1'>${e.max}</label> <select match='rangeMax'
                                            class='propagationClass form-control' style='width: 100%;'>
                                        </select> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='panel panel-default' style='margin: 0px !important; padding: 0px !important; height: 214px;'>
                    <div class='panel-heading'>
                        <div style='display: flex;'> <input class='propagationClass form-check-input' type='radio' name='Choice' value='3'
                                match='Choice'> <span style='margin-left: 10px;'>${e.Choice}</span> </div>
                    </div>
                    <div class='panel-body' style="padding-top: 6px !important;">
                        <div match='spesific' class='form-group'
                            style='display: flex !important; flex-wrap: wrap !important; margin: 0px !important; padding: 0px !important;'>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        `;
}
function C(n, e) {
  return `
      <div style="margin: 10px;">
          <label class="container">
              <span class="numberValue">${n}</span>
              <input class="propagationClass" value='${e}' type="checkbox">
              <span class="checkmark"></span>
          </label>
      </div>
    `;
}
var h = {};
typeof ceInputLang > "u" ? h = u : h = ceInputLang;
class x extends m {
  constructor() {
    super();
  }
  connectedCallback() {
    this.Init({
      self: this,
      props: ["input", "hasZero", "every", "colorMain", "colorSecond"]
    });
    var e = y(this, h);
    this.value = "*", this.Create(this, e), this.Mount();
  }
  Mount() {
    this.addSelectOptions("every"), this.addSelectOptions("step"), this.addSelectOptions("rangeMin"), this.addSelectOptions("rangeMax"), this.addSpesificOptions("spesific"), this.eventListen("select"), this.eventListen("input");
  }
  addSelectOptions(e) {
    for (var a = this.getElement("*[match=" + e + "]"), t = this.getHasZero(); t <= this.every; t++) {
      var i = document.createElement("option");
      i.innerText = this.getNumber(t), i.value = t, a.appendChild(i);
    }
  }
  addSpesificOptions(e) {
    for (var a = this.getElement("*[match=" + e + "]"), t = this.getHasZero(); t <= this.every; t++) {
      var i = document.createElement("div");
      i.innerHTML = C(this.getNumber(t), t), i.style = "width: 55px !important;", a.appendChild(i);
    }
  }
  makeCron(e, a) {
    var t = "*";
    if (e == 1)
      a.step == "*" ? t = `${a.every}` : t = `${a.every}/${a.step}`;
    else if (e == 2 && !(a.rangeMin == "*" || a.rangeMax == "*")) {
      let i = parseInt(a.rangeMin), r = parseInt(a.rangeMax);
      i < r && (t = `${a.rangeMin}-${a.rangeMax}`);
    } else
      e == 3 && a.spesific.length != 0 && (t = "", a.spesific.forEach((i) => {
        t += i + ",";
      }), t = t.slice(0, t.length - 1));
    this.value = t;
  }
  eventListen(e) {
    var a = this;
    this.getElements(e).forEach((t) => {
      t.addEventListener("change", (i) => {
        var r = a.getElement("*[match=Choice]:checked").value, s = a.getElement("*[match=every]").value, o = a.getElement("*[match=step]").value, l = a.getElement("*[match=rangeMin]").value, c = a.getElement("*[match=rangeMax]").value, d = Array.prototype.map.call(
          a.getElements("*[match=spesific] input:checked"),
          (p) => p.value
        );
        a.makeCron(r, {
          every: s,
          step: o,
          rangeMin: l,
          rangeMax: c,
          spesific: d
        });
      });
    });
  }
}
function E(n, e) {
  return `
          <div class="cronInput" style="display: flex !important; width: ${n.width} !important; height: ${n.height} !important;">
          <input class="cronInsideInput" type="text" class="form-control" placeholder="${e.inputPlaceholder}">
          <button type="button" class="cronButtonUI btn btn-custom" style="font-size: 114% !important; border-color: ${n.colorMain} !important; background-color: ${n.colorSecond} !important;">
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="white">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
          </button>
        </div>
<small class="cronexpressionError hiden" style="display: none; color: red !important; margin-top: 5px !important; margin-bottom: 5px !important;">${e.invalidCron}</small>
<div class="modal" tabindex="-1">
    <div class="modal-dialog" style="width: 893px !important;">
        <div class="modal-content" style="height: 490px !important">
            <div class="modal-header" style="height: 0px !important; padding-bottom: 30px !important;">
                <span class="close2 cronClose">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle" fill="${n.colorMain}" style="font-size: 21px !important;">
                        <path fill-rule="evenodd"
                            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path fill-rule="evenodd"
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </span>
                <span class="close2 cronSave" style="margin-right: 10px;">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="${n.colorMain}" style=" font-size: 21px !important;">
                        <path fill-rule="evenodd"
                            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path fill-rule="evenodd"
                            d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
                    </svg>
                </span>
            </div>
            <div class="modal-body" style="padding-top: 0px !important;">
                <ul class="nav nav-tabs" style="margin-top: 0px;">
                    <li class="nav-item active in"><a class="nav-link">${e.minute}</a></li>
                    <li class="nav-item"><a class="nav-link">${e.hours}</a></li>
                    <li class="nav-item"><a class="nav-link">${e.dayOfMonth}</a></li>
                    <li class="nav-item"><a class="nav-link">${e.month}</a></li>
                    <li class="nav-item"><a class="nav-link">${e.daysOfWeek}</a></li>
                </ul>
                <input class="inputCronMsg form-control" style="width: 100%; margin-top: 10px;" disabled />
                <div class="tab-content" style="margin-top: 8px !important;">
                    <div class="tab-pane active in">
                        <cron-fields pos="0" input="minute" hasZero="true" every="59" colorMain="${n.colorMain}" colorSecond="${n.colorSecond}" />
                    </div>
                    <div class="tab-pane fade">
                        <cron-fields pos="1" input="hour" hasZero="true" every="23" colorMain="${n.colorMain}" colorSecond="${n.colorSecond}" />
                    </div>
                    <div class="tab-pane fade">
                        <cron-fields pos="2" input="dayOfMonth" every="31" colorMain="${n.colorMain}" colorSecond="${n.colorSecond}" />
                    </div>
                    <div class="tab-pane fade">
                        <cron-fields pos="3" input="month" every="12" colorMain="${n.colorMain}" colorSecond="${n.colorSecond}" />
                    </div>
                    <div class="tab-pane fade">
                        <cron-fields pos="4" input="dayOfWeek" hasZero="true" every="6" colorMain="${n.colorMain}" colorSecond="${n.colorSecond}" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
}
var v = {};
typeof ceInputLang > "u" ? v = u : v = ceInputLang;
class I extends m {
  constructor() {
    super();
  }
  connectedCallback() {
    this.width = this.getAttribute("width"), this.height = this.getAttribute("height"), this.required = this.getAttribute("required") == "true", this.hotValidate = this.getAttribute("hotValidate") == "true";
    var e = this.getAttribute("color").replace("#", "");
    this.colorMain = "#" + e, this.colorSecond = this.increaseBrightness(e, 10), this.Init({
      self: this
    });
    var a = E(this, v), t = this;
    this.Create(t, a), this.setValue(this.getAttribute("value"));
    var i = this.getElement(".cronInsideInput");
    i.addEventListener("keydown", (s) => t.validateLongitud(s)), i.addEventListener("keypress", (s) => t.validateLongitud(s)), i.addEventListener("keyup", (s) => t.validateLongitud(s)), this.addEvent(".cronButtonUI", "click", () => {
      t.querySelectorAll("form").forEach((s) => s.reset()), t.getElementsByClassName("cronInsideInput").length != 0 && (t.currentValue = t.getElementsByClassName("cronInsideInput")[0].value, t.currentValue.split(" ").length == 5 && t.getCron(t.currentValue)), t.modalToggle();
    }), this.addEvent(".cronClose", "click", () => {
      t.setValue(t.currentValue), t.modalToggle();
    }), this.addEvent(".cronSave", "click", () => t.modalToggle()), this.addEvent("li > a", "click", (s) => {
      var o = 0;
      t.getElements("li > a").forEach(function(c, d) {
        c.parentNode.setAttribute("class", "nav-link"), c == s && (o = d);
      }), s.parentNode.setAttribute("class", "nav-link active in");
      var l = t.getElements("cron-fields");
      l.forEach((c) => c.parentNode.setAttribute("class", 'tab-pane fade"')), l[o].parentNode.setAttribute("class", "tab-pane active in");
    });
    var r = t.querySelector(".cronInsideInput").closest("form");
    r != null && r.closest("form").addEventListener("submit", (s) => {
      t.validator(t) || s.preventDefault();
    }), t.hotValidate && this.addEvent(".cronInsideInput", "change", (s) => t.validator(t)), this.addEvent("cron-fields", "change", (s) => {
      for (var o = !0, l = s.parentNode; o; )
        l = l.parentNode, l.nodeName == "CRON-FIELDS" && (o = !1);
      var c = t.getElement(".cronInsideInput");
      t.setValue(
        t.generateCron(
          parseInt(l.getAttribute("pos")),
          c.value,
          l.value
        )
      );
    }), this.getElements(".propagationClass").forEach(
      (s) => s.addEventListener("input", (o) => o.stopPropagation())
    ), t.validator(t);
  }
  validator(e) {
    var a = e.querySelector(".cronInsideInput"), t = e.getElement(".cronexpressionError");
    return a.value.length == 0 && e.required || a.value.length != 0 && !g(a.value) ? (t.classList.replace("hiden", "show"), !1) : (t.classList.replace("show", "hiden"), e.setValue(a.value), !0);
  }
  getTypeCron(e) {
    return e.includes("/") || e.includes("*") ? 1 : e.includes("-") ? 2 : 3;
  }
  getTypeStep(e) {
    const a = "/";
    var t = {
      every: "*",
      step: "*"
    };
    if (!e.includes(a) && e != "*")
      t.every = e;
    else if (e.includes("*") && e.includes(a))
      t.step = e.split(a)[1];
    else if (e.includes(a)) {
      var i = e.split(a);
      t.every = i[0], t.step = i[1];
    }
    return t;
  }
  getTypeRange(e) {
    const a = "-";
    var t = {
      min: "0",
      max: "0"
    };
    if (e.includes(a)) {
      var i = e.split(a);
      t.min = i[0], t.max = i[1];
    }
    return t;
  }
  getTypeChoice(e) {
    return e.split(",");
  }
  getCron(e) {
    var a = this.querySelectorAll("form"), t = e.split(" ");
    this.setCronInTab(a[0], t[0], this.getTypeCron(t[0])), this.setCronInTab(a[1], t[1], this.getTypeCron(t[1])), this.setCronInTab(a[2], t[2], this.getTypeCron(t[2]), 1), this.setCronInTab(a[3], t[3], this.getTypeCron(t[3]), 1), this.setCronInTab(a[4], t[4], this.getTypeCron(t[4]));
  }
  setCronInTab(e, a, t, i = 0) {
    var r = e.querySelectorAll("input[name='Choice']");
    switch (r.forEach((d) => d.removeAttribute("checked")), r[t - 1].checked = !0, t) {
      case 1:
        var s = this.getTypeStep(a), o = 1 - i;
        e.querySelector("*[match=every]").selectedIndex = parseInt(s.every) + o, e.querySelector("*[match=step]").selectedIndex = parseInt(s.step) + o;
        break;
      case 2:
        var l = this.getTypeRange(a);
        e.querySelector("*[match=rangeMin]").selectedIndex = parseInt(l.min) - i, e.querySelector("*[match=rangeMax]").selectedIndex = parseInt(l.max) - i;
        break;
      case 3:
        var c = this.getTypeChoice(a);
        e.querySelectorAll("*[match=spesific] input").forEach((d, p) => {
          c.includes((p + i).toString()) && (d.checked = !0);
        });
        break;
    }
  }
  validateLongitud(e) {
    var a = e.target.value.trim().split(" ");
    a.length > 5 && (e.target.value = a.slice(0, 5).join(" ")), this.sendEvent();
  }
  setValue(e) {
    var a = ["*", "*", "*", "*", "*"];
    if (e == null)
      return a.join(" ");
    if (e.length > 0) {
      for (var t = e.trim().split(" "), i = 0; i < 5; i++)
        t[i] != null && (a[i] = t[i]);
      e = a.join(" ");
    }
    var r = this.getElement(".cronInsideInput");
    r.value = e, this.querySelector(".inputCronMsg").value = f.toString(e), this.sendEvent();
  }
  modalToggle() {
    this.getElement(".modal").classList.toggle("show");
  }
  generateCron(e, a, t) {
    var i = a.split(" ");
    return i[e] = t, i.join(" ");
  }
  sendEvent() {
    var e = this.getElement(".cronInsideInput"), a = new CustomEvent("input", {
      detail: {
        value: e.value
      },
      bubbles: !0,
      cancelable: !0
    });
    this.dispatchEvent(a);
  }
}
customElements.define("cron-fields", x);
customElements.define("cron-expression-input", I);

setInterval(() => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    if (h > 12) {
        h = h - 12
    }
    console.log(h, m, s);
    let hh = document.getElementById("hh");
    let mm = document.getElementById("mm");
    let ss = document.getElementById("ss");

    hh.style.strokeDashoffset = 510 - (h * 510) / 12;
    mm.style.strokeDashoffset = 630 - (m * 630) / 60;
    ss.style.strokeDashoffset = 760 - (s * 760) / 60;

    let sec_dot = document.querySelector(".sec_dot");
    let min_dot = document.querySelector(".min_dot");
    let hr_dot = document.querySelector(".hr_dot");

    sec_dot.style.transform = `rotate(${s * 6}deg)`;
    min_dot.style.transform = `rotate(${m * 6}deg)`;
    hr_dot.style.transform = `rotate(${h * 30}deg)`;

    let hr = document.getElementById("hr");
    let mn = document.getElementById("mn");
    let sc = document.getElementById("sc");

    sc.style.transform = `rotate(${s * 6}deg)`;
    mn.style.transform = `rotate(${m * 6}deg)`;
    hr.style.transform = `rotate(${h * 30}deg)`;



});
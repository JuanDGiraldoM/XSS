sM = 0;
R = 0;
x1 = .1;
y1 = .05;
x2 = .25;
y2 = .24;
x3 = 1.6;
y3 = .24;
x4 = 300;
y4 = 200;
x5 = 300;
y5 = 200;
DI = document.querySelectorAll("body *");
DIL = DI.length;
dB = document.body;
dBs = dB.style;
sT = setTimeout;

function A() {
    if (sM) return;
    for (i = 0; i - DIL; i++) {
        DIS = DI[i].style;
        DIS.position = 'absolute';
        DIS.left = (Math.sin(R * x1 + i * x2 + x3) * x4 + x5) * 0.1 + "px";
        DIS.top = (Math.cos(R * y1 + i * y2 + y3) * y4 + y5) * 0.1 + "px"
    }
    R++
}
setInterval('A()', 50);
void(0);

function fI(el, len, callback) {
    el.style.display = '';
    var opac = 0;
    var timer = setInterval(function() {
        if (el && el.id && el.id == 'overlay' && el.style.opacity >= 0.9) {
            clearInterval(timer);
            return;
        }
        if (opac >= 1) {
            clearInterval(timer);
            if (callback) {
                callback();
                return;
            };
        }
        el.style.opacity = opac.toFixed(1);
        opac += 0.1;
    }, len);
    return this;
}

function fO(el, len, callback) {
    var opac = 1;
    var timer = setInterval(function() {
        if (opac <= 0) {
            clearInterval(timer);
            el.style.display = 'none';
            if (callback) {
                callback()
            };
        }
        el.style.opacity = opac.toFixed(1);
        opac -= 0.03;
    }, len);
    return this;
}
dBs.overflowX = 'hidden';
dBs.overflowY = 'hidden';

function shM(s) {
    document.getElementById('msg').innerHTML = s;
}

function showStatic() {
    dB.innerHTML = "<img style='position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border: 0; margin: 0' src='/static/static.gif' /><div id='overlay' style='position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border: 0; margin: 0; background-color: black;'><div id='msg' style='margin: 0 auto; text-align: center; margin-top: 140px; font-size: 16px; font-family: monospace; color: white;'></div></div>";
    dBs.positionLeft = 0;
    dBs.positionTop = 0;
    dBs.marginLeft = 0;
    dBs.marginTop = 0;
    dBs.opacity = 0;
    fI(dB, 100, function() {
        shMs();
    });
    fI(document.getElementById('overlay'), 100, function() {
        document.getElementById('overlay').style.opacity = 0.9;
    });
}

function shMs() {
    sT(function() {
        shM("Reading your posts...")
    }, 500);
    sT(function() {
        shM("Sending post contents to Dr. Evil...")
    }, 2000);
    sT(function() {
        shM("Replacing your stream with an evil post...")
    }, 4000);
    sT(function() {
        shM("All done, bye...")
    }, 6000);
    sT(function() {
        DB.setup("<H1>HACKED!</H1>");
        window.location.reload();
    }, 7500);
}
sT(function() {
    fO(dB, 51, function() {
        sM = 1;
        showStatic()
    });
}, 4000);

var n = function () {
    for (var t = 0, e = new Array(256), n = 0; 256 != n; ++n)
        t = n,
            t = 1 & t ? -306674912 ^ t >>> 1 : t >>> 1,
            t = 1 & t ? -306674912 ^ t >>> 1 : t >>> 1,
            t = 1 & t ? -306674912 ^ t >>> 1 : t >>> 1,
            t = 1 & t ? -306674912 ^ t >>> 1 : t >>> 1,
            t = 1 & t ? -306674912 ^ t >>> 1 : t >>> 1,
            t = 1 & t ? -306674912 ^ t >>> 1 : t >>> 1,
            t = 1 & t ? -306674912 ^ t >>> 1 : t >>> 1,
            t = 1 & t ? -306674912 ^ t >>> 1 : t >>> 1,
            e[n] = t;
    return "undefined" != typeof Int32Array ? new Int32Array(e) : e
}()
    , calcs = function (t) {
        for (var e, o, r = -1, i = 0, a = t.length; i < a;)
            e = t.charCodeAt(i++),
                e < 128 ? r = r >>> 8 ^ n[255 & (r ^ e)] : e < 2048 ? (r = r >>> 8 ^ n[255 & (r ^ (192 | e >> 6 & 31))],
                    r = r >>> 8 ^ n[255 & (r ^ (128 | 63 & e))]) : e >= 55296 && e < 57344 ? (e = (1023 & e) + 64,
                        o = 1023 & t.charCodeAt(i++),
                        r = r >>> 8 ^ n[255 & (r ^ (240 | e >> 8 & 7))],
                        r = r >>> 8 ^ n[255 & (r ^ (128 | e >> 2 & 63))],
                        r = r >>> 8 ^ n[255 & (r ^ (128 | o >> 6 & 15 | (3 & e) << 4))],
                        r = r >>> 8 ^ n[255 & (r ^ (128 | 63 & o))]) : (r = r >>> 8 ^ n[255 & (r ^ (224 | e >> 12 & 15))],
                            r = r >>> 8 ^ n[255 & (r ^ (128 | e >> 6 & 63))],
                            r = r >>> 8 ^ n[255 & (r ^ (128 | 63 & e))]);
        return r ^ -1
    };

//console.log(o('/video/urls/v/1/toutiao/mp4/v0200fg10000cl5da3rc77u96biutvrg?r=6640131504028195') >>> 0)


//o('/video/urls/v/1/toutiao/mp4/v0200fg10000cl5da3rc77u96biutvrg?r=6640131504028195')>>>0
//"?r=" + Math.random().toString(10).substring(2);

module.exports = {calcs}
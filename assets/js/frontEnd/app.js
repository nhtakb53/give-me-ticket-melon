require.config({
    baseUrl: '/resource/frontEnd',
    urlArgs: 'ts=' + (new Date()).getTime(),
    waitSeconds:0,
    paths: {
        //플러그인
        "domReady": "js/lib/domReady",
        "Handlebars" : "js/lib/handlebars.min-v4.5.3",
        // "jquery" : "js/lib/jquery-1.11.3.min",
        "jquery" : "js/lib/jquery-3.6.0.min",
        // "jquery-migrate" : "js/lib/jquery-migrate-3.3.2",
        "jqueryUi" : "js/lib/jquery-ui",
        "inputmask" : "js/lib/jquery.inputmask.bundle",
        "placeholder" : "js/lib/jquery.placeholder.min",
        "underscore" : "js/lib/underscore-min",
        "UAParser":"js/lib/ua-parser.min",
        "momentTimeZone":"js/lib/moment-timezone-with-data-1970-2030.min",
        "netfunnel":"js/lib/netfunnel",
        "swiper":"js/lib/swiper.min",

        //publishing
        "ui_script":"js/lib/ui_script",

        //ticket
        "ticketCode":"js/common/code/commonCode",
        "ticketDomain":"js/common/domain/commonDomain",
        "ticketUtil":"js/common/util/commonUtil",
        "ticketStringUtil":"js/common/util/commonStringUtil",

        //captcha
        "ticketCaptchaUtil" : "js/lib/CaptchaUtils"
    },
    packages: [{
        name: 'moment',
        location: 'js/lib',
        main: 'moment.min'
    }],
    shim:{
        "jquery" : {
            exports : "$"
        },
        "underscore" : {
            exports : "_"
        },
        "Handlebars" : {
            deps : [ "jquery" ]
        }
    }
});

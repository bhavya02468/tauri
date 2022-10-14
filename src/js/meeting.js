window.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM fully loaded and parsed');
  websdkready();
});

function websdkready() {
  var testTool = window.testTool;
  // get meeting args from url
  var s1 = "EGEGX2AAm64fXG6wIHrnqiXu8YFtEmU9WjWW";
  var s5 = localStorage.getItem("pwd")//meeting password
  var s2 = parseInt(localStorage.getItem("mn"))//meeting number
  var s3 = localStorage.getItem("name")
  var s4 = localStorage.getItem("version")
  var s6 = localStorage.getItem("signature")
  var s7 = localStorage.getItem("email")//not required




  var tmpArgs = {
    sdkKey: s1,
    mn: s2,
    name: s3,
    version: s4,
    pwd: s5,
    email: s7,
    signature: s6

  }

  var meetingConfig = {
    sdkKey: tmpArgs.sdkKey,
    meetingNumber: tmpArgs.mn,
    userName: tmpArgs.name,
    passWord: tmpArgs.pwd,
    leaveUrl: "/index.html",
    role: "Attendee",
    userEmail: "",
    lang: "en-US",
    signature: tmpArgs.signature || "",
    china: false,
  };

  // a tool use debug mobile device
  if (testTool.isMobileDevice()) {
    vConsole = new VConsole();
  }
  console.log(JSON.stringify(ZoomMtg.checkSystemRequirements()));

  // it's option if you want to change the WebSDK dependency link resources. setZoomJSLib must be run at first
  ZoomMtg.setZoomJSLib("https://source.zoom.us/2.6.0/lib", "/av"); // CDN version defaul
  ZoomMtg.preLoadWasm();
  ZoomMtg.prepareJssdk();

  function beginJoin(signature) {
    ZoomMtg.init({
      showMeetingHeader: false, //option
      disableInvite: true, //optional
      disableCallOut: true, //optional
      disableRecord: false, //optional
      disableJoinAudio: true, //optional
      audioPanelAlwaysOpen: true, //optional
      showPureSharingContent: true, //optional
      isSupportAV: true, //optional,
      isSupportChat: false, //optional,
      isSupportQA: false, //optional,
      isSupportPolling: false, //optional
      isSupportBreakout: false, //optional
      isSupportCC: false, //optional,
      screenShare: true, //optional,
      rwcBackup: '', //optional,
      videoDrag: true, //optional,
      sharingMode: 'fit', //optional,
      videoHeader: true, //optional,
      isLockBottom: true, // optional,
      isSupportNonverbal: true, // optional,
      videoHeader: true,
      videoDrag: true,
      enableHD: true,
      disablePreview: true,
      isLockBottom: false, // optional,
      isSupportNonverbal: true, // optional,
      leaveUrl: meetingConfig.leaveUrl,
      webEndpoint: meetingConfig.webEndpoint,
      disableCORP: !window.crossOriginIsolated, // default true
      // disablePreview: false, // default false
      externalLinkPage: './externalLinkPage.html',
      success: function () {
        console.log(meetingConfig);
        console.log("signature", signature);
        ZoomMtg.i18n.load("en-US");
        ZoomMtg.i18n.reload("en-US");
        ZoomMtg.join({
          meetingNumber: meetingConfig.meetingNumber,
          userName: meetingConfig.userName,
          signature: signature,
          sdkKey: meetingConfig.sdkKey,
          userEmail: meetingConfig.userEmail,
          passWord: meetingConfig.passWord,
          success: function (res) {


            console.log("join meeting success");
            console.log("get attendeelist");
           
            ZoomMtg.getAttendeeslist({});
            ZoomMtg.getCurrentUser({
              success: function (res) {
                console.log("success getCurrentUser", res.result.currentUser);
               
              },
            });
          },
          error: function (res) {
            console.log(res);
          },
        });
      },
      error: function (res) {
        console.log(res);
      },
    });

    ZoomMtg.inMeetingServiceListener('onUserJoin', function (data) {
      console.log('inMeetingServiceListener onUserJoin', data);


      function removeElementsByClass1() {

        const elements = document.getElementsByClassName("footer-button-base__button ax-outline");
        while (elements.length > 0) {
          elements[0].parentNode.removeChild(elements[0]);
        }
      }
      removeElementsByClass1()
  
      function removeElementsByClass2() {
        const elements = document.getElementsByClassName("footer-button-base__button ax-outline footer-button__button");
        while (elements.length > 0) {
          elements[0].parentNode.removeChild(elements[0]);
        }
      }
      removeElementsByClass2()
  
  
      function removeElementsByClass3() {
        const elements = document.getElementsByClassName("footer-button-base__img-layer");
        while (elements.length > 0) {
          elements[0].parentNode.removeChild(elements[0]);
        }
      }
      removeElementsByClass3()
  
  
      function removeElementsByClass4() {
        const elements = document.getElementsByClassName("footer-button-base__button-label");
        while (elements.length > 0) {
          elements[0].parentNode.removeChild(elements[0]);
        }
      }
      removeElementsByClass4()
  
      function removeElementsByClass5() {
        const elements = document.getElementsByClassName("footer-button-base__button ax-outline send-video-container__btn");
        while (elements.length > 0) {
          elements[0].parentNode.removeChild(elements[0]);
        }
      }
      removeElementsByClass5()
  
      function removeElementsByClass6() {
        const elements = document.getElementsByClassName("zm-btn join-audio-container__btn zm-btn--default zm-btn__outline--blue zm-btn-icon");
        while (elements.length > 0) {
          elements[0].parentNode.removeChild(elements[0]);
        }
      }
      removeElementsByClass6()


      
      function removeElementsByClass7() {
        const elements = document.getElementsByClassName("meeting-info-container__wrapper meeting-info-icon__icon-wrap  ax-outline-blue")
        while (elements.length > 0) {
          elements[0].parentNode.removeChild(elements[0]);
        }
      }
      removeElementsByClass7()

     
      
      function removeElementsByClass8() {
        const elements = document.getElementsByClassName("meeting-info-container meeting-info-container--left-side")
        while (elements.length > 0) {
          elements[0].parentNode.removeChild(elements[0]);
        }
      }
      removeElementsByClass8()


    });

   



    ZoomMtg.inMeetingServiceListener('onUserLeave', function (data) {
      console.log('inMeetingServiceListener onUserLeave', data);
    });

    ZoomMtg.inMeetingServiceListener('onUserIsInWaitingRoom', function (data) {
      console.log('inMeetingServiceListener onUserIsInWaitingRoom', data);
    });

    ZoomMtg.inMeetingServiceListener('onMeetingStatus', function (data) {
      console.log('inMeetingServiceListener onMeetingStatus', data);
    });
  }

  beginJoin(meetingConfig.signature);
};
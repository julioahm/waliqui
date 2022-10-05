function htmll()
{
var container = document.getElementById('bitmovin-94527');
function override(url){
  if (url.indexOf("licensing.bitmovin.com/licensing") > -1) return "data:text/plain;charset=utf-8;base64,eyJzdGF0dXMiOiJncmFudGVkIiwibWVzc2FnZSI6IlRoZXJlIHlvdSBnby4ifQ==";
  if (url.indexOf("licensing.bitmovin.com/impression") > -1) return "data:text/plain;charset=utf-8;base64,eyJzdGF0dXMiOiJncmFudGVkIiwibWVzc2FnZSI6IlRoZXJlIHlvdSBnby4ifQ==";
  return url;
}
var opens = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function() {
  var url = override(arguments[1]);
  arguments[1] = url;
  return opens.apply(this, arguments);
}
const config = {
  key: "11d3698c-efdf-42f1-8769-54663995de2b",
	analytics: false, cast: { enable: true },
	playback: { 
		autoplay: false, 
		muted: false
		},
	style: {width: '100%'},
	advertising: {

		onAdsManagerAvailable: function(adsManager) {
		
			// Get a reference to an HTML element representing the ad
			var videoElement = player.getVideoElement();
			
			// Not Needed because the player already exposes the ad manager.
			// var adsRenderingSettings = new google.ima.AdsRenderingSettings();
			// var adsManager = adsManagerLoadedEvent.getAdsManager(videoElement, adsRenderingSettings);
			
			// Create your config object
			const configSdkIma = {partner:'turner', anId: '930500', campId: '640x480', chanId: '21841158045', pubOrder: 'in-stream video', custom: 'pre-roll'};
			
			// Init IAS Integration
			googleImaVansAdapter.init(google, adsManager, videoElement, configSdkIma);
		}
		
	}
}

var source = {
	
dash: "https://d17lgdx4t7a4od.cloudfront.net/out/v1/bca3f8d654aa4cb293e4e9801468a5a3/index.mpd",
drm: {
    widevine: {
      LA_URL: ''
    },
},
	title: "Reproductor | Diex Sport",
	
	poster: "https://img.youtube.com/vi/KNWQKa6EhAU/maxresdefault.jpg"
}

 
var player = new bitmovin.player.Player(container, config);
    player.load(source);


var turner_metadata = { "trackAction" : [] };
window.setPlayerPlaybackFinished = false;
window.setEventContentCompleted = true;

player.on(bitmovin.player.PlayerEvent.Ready, function (data) {
    	turner_metadata.trackAction.push({
	"type" : "video",
	"subtype" : "Player_Ready",
	"data" : {
		"playerid": "bitmovin-94527", 
	}
	});
});

player.on(bitmovin.player.PlayerEvent.Play, function (data) {
	//console.log("On Play " + JSON.stringify(data));
	
	if (data.time == 0 && setPlayerPlaybackFinished) {
		//console.log("On rePlay " + JSON.stringify(data) + "-" + setPlayerPlaybackFinished);
		turner_metadata.trackAction.push({
		"type" : "video",
		"subtype" : "Player_Ready",
		"data" : {
			"playerid": "bitmovin-94527", 
			"content_duration": 0,

		}
		});
	}
	
	var eventPlay = "Media_Resumed";
	if (data.time == 0) eventPlay = "Media_Started";
	turner_metadata.trackAction.push({"type" : "video", "subtype" : eventPlay, "data" : {}});
});

player.on(bitmovin.player.PlayerEvent.Paused, function (data) {
	turner_metadata.trackAction.push({"type" : "video", "subtype" : "Media_Paused", "data" : {}});
});

player.on(bitmovin.player.PlayerEvent.StallStarted, function (data) {
    	turner_metadata.trackAction.push({"type" : "video", "subtype" : "Media_Buffering_Started", "data" : {}});
});
player.on(bitmovin.player.PlayerEvent.StallEnded, function (data) {
    	turner_metadata.trackAction.push({"type" : "video", "subtype" : "Media_Buffering_Finished", "data" : {}});
});

player.on(bitmovin.player.PlayerEvent.Seek, function (data) {
	//console.log("On Seek: " + JSON.stringify(data)); 
    	turner_metadata.trackAction.push({"type" : "video", "subtype" : "Media_Seeking_Started", "data" : {}});
});
player.on(bitmovin.player.PlayerEvent.Seeked, function (data) {
	//console.log("On Seeked: " + JSON.stringify(data)); 
    	turner_metadata.trackAction.push({"type" : "video", "subtype" : "Media_Seeking_Finished", "data" : {}});
});

player.on(bitmovin.player.PlayerEvent.PlaybackFinished, function (data) {
	turner_metadata.trackAction.push({"type" : "video", "subtype" : "Media_Finished", "data" : {}});
	window.setPlayerPlaybackFinished = true; //set finish player 
});

player.on(bitmovin.player.PlayerEvent.AdStarted, function (data) {
    	//console.log("On Ad Started: " + JSON.stringify(data)); 
    	//console.log("On Ad Started: " + JSON.stringify(player.ads.getActiveAdBreak()));
    	var getAdStartedActiveAdBreak = player.ads.getActiveAdBreak();
    	window.setPlayerActiveAdBreakPosition = getAdStartedActiveAdBreak.position; //set position 
    	turner_metadata.trackAction.push({
	"type" : "video",
	"subtype" : "Ad_Started",
	"data" : {
		"ad_id": getAdStartedActiveAdBreak.ads[0] ? getAdStartedActiveAdBreak.ads[0].id : "0",
		"ad_duration": data.duration,
		"ad_type": getAdStartedActiveAdBreak.id
	}
	});
});
player.on(bitmovin.player.PlayerEvent.AdSkipped, function (data) {
    	turner_metadata.trackAction.push({"type" : "video", "subtype" : "Ad_Skipped", "data" : {}});
});
player.on(bitmovin.player.PlayerEvent.AdFinished, function (data) {
    	turner_metadata.trackAction.push({"type" : "video", "subtype" : "Ad_Finished", "data" : {}});
    	//console.log("On Ad Finished: " + setPlayerActiveAdBreakPosition);
    	
    	if (setPlayerActiveAdBreakPosition == 'pos') {
    		turner_metadata.trackAction.push({"type" : "video", "subtype" : "Content_Completed", "data" : {}});
    		window.setEventContentCompleted = false; //set finish player 
    	}
});

player.on(bitmovin.player.PlayerEvent.PlaybackFinished, function (data) {
	
    	if (setEventContentCompleted) {
    		turner_metadata.trackAction.push({"type" : "video", "subtype" : "Content_Completed", "data" : {}});
    		window.setEventContentCompleted = true; //set finish player 
    	}
});
window.turner_metadata.currentTime = 1;
player.on(bitmovin.player.PlayerEvent.TimeChanged, function (data) {
	//console.log("On TimeChanged: " + JSON.stringify(data));
	window.turner_metadata.currentTime = Math.round(data.time);
	//console.log("turner_metadata.currentTime: " +  Math.round(turner_metadata.currentTime));
});
}

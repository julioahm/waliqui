function htmll()
{
document.writeln("<script>");
document.writeln("  var player = new Clappr.Player({");
document.writeln("          source: 'https://hls-m008.live-lv3.canalplus-cdn.net/live/disk/beinsportsmax9-hd/dash-fhddvr/beinsportsmax9-hd.mpd',");
document.writeln("          mimeType: 'application/dash+xml',");
document.writeln("          height: '100%',");
document.writeln("          width: '100%',");
document.writeln("          plugins: [DashShakaPlayback, LevelSelector, ChromecastPlugin],");
document.writeln("          chromecast: {");
document.writeln("              appId: '9DFB77C0',");
document.writeln("              contentType: 'video/mp4',");
document.writeln("          },");
document.writeln("          shakaConfiguration: {");
document.writeln("              drm: {");
document.writeln("                  clearKeys: {");
document.writeln("                      'db9822d2d18241e09f33da9853b35597': 'e98267c671ba856eb0fc864657112999',");
document.writeln("                      'fe8b79385d624e2ba7554630a1b520cd': '9bb268fa179f174556d3ac727130e87c',");
document.writeln("                  }");
document.writeln("              },");
document.writeln("              preferredAudioLanguage: 'pt-BR',");
document.writeln("          },");
document.writeln("          shakaOnBeforeLoad: function(shaka_player) {},");
document.writeln("          parentId: '#player'");
document.writeln("      });");
document.writeln("</script>");
}

function htmll()
{
document.writeln("<script>");
document.writeln("var player = new Clappr.Player({");
document.writeln("        parentId: \"#video\",");
document.writeln("        source: \"https://tvup-live.secure.footprint.net/barcatv/barcatv.mpd\",");
document.writeln("        plugins: [LevelSelector, DashShakaPlayback, ChromecastPlugin, ClapprPip.PipButton, ClapprPip.PipPlugin, Clappr.MediaControl, PlaybackRatePlugin],");
document.writeln("        events: {onReady: function() {var plugin = this.getPlugin('click_to_pause'); plugin && plugin.disable();},},");
document.writeln("        autoplay: false,");
document.writeln("          width: '100%',");
document.writeln("          height: '100%',");
document.writeln("        shakaConfiguration: {");
document.writeln("          drm: {");
document.writeln("            clearKeys: {");
document.writeln("      'c75fa077f3185e4899a5c08458fff8d7': 'bd8817e700e723bd0366fd82b5d02a45',");
document.writeln("      '53f4449a2ce35c1c91a2cb6bd467e2a6': 'fc522076202388068ccfe1a961f3abd1',");
document.writeln("      '551dbac900da53f3b2b30b589e5fb999': '1c6df1a6a5ca8aaa16a00f488fa00322',");
document.writeln("            } ");
document.writeln("        } ");
document.writeln("       },");
document.writeln("        shakaOnBeforeLoad: function(shakaPlayerInstance) {");
document.writeln("            if (P2PEngineShaka.isSupported()) {");
document.writeln("                var engine = new P2PEngineShaka(shakaPlayerInstance, {");
document.writeln("                   // logLevel: 'debug',");
document.writeln("                });");
document.writeln("                 engine.on('stats', function (stats) {");
document.writeln("            var total = stats.totalHTTPDownloaded + stats.totalP2PDownloaded;");
document.writeln("            document.querySelector('#info').innerText = `p2p ratio: ${Math.round(stats.totalP2PDownloaded/total*100)}%   saved traffic: ${Math.round(stats.totalP2PDownloaded)}KB upload: ${Math.round(stats.totalP2PUploaded)}KB`;");
document.writeln("        })");
document.writeln("        engine.on('peers', function (peers) {");
document.writeln("            document.querySelector('#peers').innerText = `peers: ${peers.length}`;");
document.writeln("        })");
document.writeln("            }");
document.writeln("        }");
document.writeln("    });");
document.writeln("    player.play();");
document.writeln("</script>");
}

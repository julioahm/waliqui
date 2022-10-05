function htmll()
{
document.writeln("<script>");
document.writeln("var player = new Clappr.Player({");
document.writeln("        parentId: \"#video\",");
document.writeln("        source: \"https://mxlivechannelsvosdash.clarovideo.com/Content/DASH_DASH_FK/Live/Channel(FOXSPORTS_PREMIUM_HD)/manifest.mpd\",");
document.writeln("        plugins: [LevelSelector, DashShakaPlayback, ChromecastPlugin, ClapprPip.PipButton, ClapprPip.PipPlugin, Clappr.MediaControl, PlaybackRatePlugin],");
document.writeln("        events: {onReady: function() {var plugin = this.getPlugin('click_to_pause'); plugin && plugin.disable();},},");
document.writeln("        autoplay: false,");
document.writeln("          width: '100%',");
document.writeln("          height: '100%',");
document.writeln("        shakaConfiguration: {");
document.writeln("          drm: {");
document.writeln("            clearKeys: {");
document.writeln("      '91a21f7ffc03b3e46fe348dd075575': '',");
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

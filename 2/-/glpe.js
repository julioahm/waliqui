function htmll()
{
document.writeln("<script type=\"text/javascript\">");
document.writeln("    var player = new Clappr.Player({");
document.writeln("        source: 'https://b42566-p10-h7e-afzpzwog.2.cdn.telefonica.com/_42566/_-_psi_-_/live/disk1/GolPeruHD/DASH/GolPeruHD.mpd?tcdn-bitrate-filter=LiveL-M',");
document.writeln("        mimeType: 'application/dash+xml',");
document.writeln("        height: '100%',");
document.writeln("        width: '100%',");
document.writeln("        plugins: [DashShakaPlayback, LevelSelector, ChromecastPlugin],");
document.writeln("        chromecast: {");
document.writeln("            appId: '9DFB77C0',");
document.writeln("            contentType: 'video/mp4',");
document.writeln("        },//xDa");
document.writeln("        shakaConfiguration: {");
document.writeln("            drm: {");
document.writeln("                clearKeys: {");
document.writeln("                    '25b6fe25b6fea57d2e4c62b538851132df22f1': 'c176e51f2904eb1ef8a194797a1add74',");
document.writeln("                }");
document.writeln("            },");
document.writeln("            preferredAudioLanguage: 'pt-BR',");
document.writeln("        },");
document.writeln("        shakaOnBeforeLoad: function(shaka_player) {},");
document.writeln("        parentId: '#player'");
document.writeln("    });");
document.writeln("    var meta = document.createElement('meta');");
document.writeln("    meta.name = \"referrer\";");
document.writeln("    meta.content = \"no-referrer\";");
document.writeln("    document.getElementsByTagName('head')[0].appendChild(meta);");
document.writeln("</script>");
}

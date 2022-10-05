function htmll()
{
document.writeln("<script type=\"text/javascript\">");
document.writeln("    var player = new Clappr.Player({");
document.writeln("        source: 'https://edge1-zapopan.izzigo.tv/live4/out/u/dash/AZTECA-7-HD/default.mpd',");
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
document.writeln("                    '786acffb7824aa8375f5d3493fa557d9': 'dade60b15a584d2ccaff397abee2041e',");
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

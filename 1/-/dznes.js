function htmll()
{
document.writeln("<script type=\"text/javascript\">");
document.writeln("    var player = new Clappr.Player({");
document.writeln("        source: 'https://dce-fs-live-dazn-cdn.dazn.com/dashdrm/dazn-linear-037/stream.mpd',");
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
document.writeln("                    'cfb5e2b73bef4f3c878f25ab86a7451f': '0d6712bf2a84edcc93d001a9613f6fec',");
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

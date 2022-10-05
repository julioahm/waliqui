function htmll()
{
document.writeln("<script type=\"text/javascript\">");
document.writeln("    var player = new Clappr.Player({");
document.writeln("        source: 'https://mag1.iris.mts.rs/originrrs.iris.mts.rs/PLTV/88888888/224/3221228589/3221228589.mpd',");
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
document.writeln("                    'efe61e70ed8d4aca9f09c321da81ac03': '854de83b56b3e0215835e120948fada1',");
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

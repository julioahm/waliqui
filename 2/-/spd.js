function htmll()
{
document.writeln("<script type=\"text/javascript\">");
document.writeln("    var player = new Clappr.Player({");
document.writeln("        source: 'https://dce-fs-live-dazn-cdn.dazn.com/dashdrm/dazn-linear-022/stream.mpd',");
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
document.writeln("                \"4e10006d817658f49834f90f2581f7c5\": \"593577e3f5dfcae421a283eecfd4e075\",");
document.writeln("               \"9b0d9d4ed3b552c4b2986c51df75f329\": \"d8d00c5e6c884b3a1660b1446b7e75b5\",");
document.writeln("               \"c4b7ec59fa5255c5a76b78b074bcb9ea\": \"5a3530d04decbebf93592855a7b7fafd\",");
document.writeln("               \"cfb5e2b73bef4f3c878f25ab86a7451f\": \"0d6712bf2a84edcc93d001a9613f6fec\",");
document.writeln("               'd6229ed7c208587583d7b4ef894ad69b': \"7825bf1a2e1039aa0dc5e45b5536618e\"");
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

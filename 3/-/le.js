function htmll()
{
document.writeln("    <script>");
document.writeln("        var player = new Clappr.Player({");
document.writeln("        source: 'https://hls-m007.live-lv3.canalplus-cdn.net/live/disk/lequipe-hd/dash-fhddvr/lequipe-hd.mpd',");
document.writeln("        mimeType: 'application/dash+xml',");
document.writeln("        height: '100%',");
document.writeln("        width: '100%',");
document.writeln("        plugins: [DashShakaPlayback, LevelSelector, ChromecastPlugin],");
document.writeln("        chromecast: {");
document.writeln("            appId: '9DFB77C0',");
document.writeln("            contentType: 'video/mp4',");
document.writeln("        },");
document.writeln("        shakaConfiguration: {");
document.writeln("            drm: {");
document.writeln("                clearKeys: {");
document.writeln("                    '2b3a797331514b2fa9b8caa23a237ba2': '668bb76289cf22f0265428170d095111',");
document.writeln("                     '859b66c9e36a4c369f7303ffe06b1488': 'ac1979c2003454be7d931461e78f73fe',");
document.writeln("                     '9185133a21d541779575831b8c9049b4': 'e97119e99acd0c216424a1abd8d9868e',");
document.writeln("                     '0ecc48f887c1456fa634faa4df45199c': '1c32ac4b777af4bb7cbfb69b080e4e15'");
document.writeln("                }");
document.writeln("            },");
document.writeln("            preferredAudioLanguage: 'pt-BR',");
document.writeln("        },");
document.writeln("        shakaOnBeforeLoad: function(shaka_player) {},");
document.writeln("        parentId: '#player'");
document.writeln("    });");
document.writeln("    </script>");
}

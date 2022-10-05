function htmll()
{
document.writeln("<script>");
document.writeln("    var playerInstance = jwplayer(\"player\");");
document.writeln("    playerInstance.setup({");
document.writeln("        playlist: [{");
document.writeln("            \"title\": \"Reproductor | Diex Sport\",");
document.writeln("            \"description\": \"Mirar DirecTV Colombia de manera gratuita\",");
document.writeln("            \"image\": \"https://img.youtube.com/vi/GP3yoWqmPLU/maxresdefault.jpg\",");
document.writeln("            \"sources\": [");
document.writeln("                {");
document.writeln("                    \"default\": false,");
document.writeln("                    \"type\": \"dash\",");
document.writeln("                    \"file\": 'https://dtvott-abc.akamaized.net/dash_live_1059/manifest.mpd',");
document.writeln("                    \"drm\": {");
document.writeln("                        \"clearkey\": { \"keyId\": \"60203b253cb45019b0a739bb2b32345a\", \"key\": \"31e8d7c9def0d523c559904f23f94ce2\" }");
document.writeln("                    },");
document.writeln("                    \"label\": \"0\"");
document.writeln("                }");
document.writeln("            ]");
document.writeln("        }],");
document.writeln("        width: \"100%\",");
document.writeln("        height: \"100%\",");
document.writeln("        aspectratio: \"16:9\",");
document.writeln("        autostart: false,");
document.writeln("        cast: {},");
document.writeln("        sharing: {}");
document.writeln("    });");
document.writeln("</script>");
}

function htmll()
{
document.writeln("<script>");
document.writeln("var playerInstance = jwplayer(\"player\");");
document.writeln("    playerInstance.setup({");
document.writeln("        playlist: [{");
document.writeln("            \"title\": \"Reproductor | Diex Sport\",");
document.writeln("            \"description\": \"Mirar Movistar de manera gratuita\",");
document.writeln("            \"image\": \"\",");
document.writeln("            \"sources\": [");
document.writeln("                {");
document.writeln("                    \"default\": false,");
document.writeln("                    \"type\": \"dash\",");
document.writeln("                    \"file\": 'https://crytonep.herokuapp.com/https://mligacampeones-dash-movistarplus.emisiondof6.com/dash/mligacampeones.isml/manifest.mpd',");
document.writeln("                    \"drm\": {");
document.writeln("                        \"clearkey\": { \"keyId\": \"0d35a933a80c48bc98f17906ee83a56d\", \"key\": \"6461b4d5866add924b6cadc2cf59ce84\" }");
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

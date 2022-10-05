function htmll()
{
document.writeln("<script>");
document.writeln("    var playerInstance = jwplayer(\"player\");");
document.writeln("    playerInstance.setup({");
document.writeln("        playlist: [{");
document.writeln("            \"title\": \"Reproductor | Ultra Deportes\",");
document.writeln("            \"description\": \"Mirar ESPN de manera gratuita\",");
document.writeln("            \"image\": \"https://img.youtube.com/vi/A0J9dzFOplk/maxresdefault.jpg\",");
document.writeln("            \"sources\": [");
document.writeln("                {");
document.writeln("                    \"default\": false,");
document.writeln("                    \"type\": \"dash\",");
document.writeln("                    \"file\": 'https://edge-live12-sl.cvattv.com.ar/live/c3eds/ESPN2HD/SA_Live_dash_enc/ESPN2HD.mpd',");
document.writeln("                    \"drm\": {");
document.writeln("                        \"clearkey\": { \"keyId\":  \"e884b711ab111beb8a7ba1e7bcbdc9bf\", \"key\": ");
document.writeln("                        \"cb89ee3961599e3e648a5aad60895f34\" }");
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

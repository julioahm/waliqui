function htmll()
{
document.writeln("<script>");
document.writeln("    var playerInstance = jwplayer(\"player\");");
document.writeln("    playerInstance.setup({");
document.writeln("        playlist: [{");
document.writeln("            \"title\": \"Reproductor | Ultra Deportes\",");
document.writeln("            \"description\": \"Mirar ESPN Perú de manera gratuita\",");
document.writeln("            \"image\": \"https://img.youtube.com/vi/A0J9dzFOplk/maxresdefault.jpg\",");
document.writeln("            \"sources\": [");
document.writeln("                {");
document.writeln("                    \"default\": false,");
document.writeln("                    \"type\": \"dash\",");
document.writeln("                    \"file\": 'https://dtvott-abc.akamaized.net/dash_live_1109/manifest.mpd',");
document.writeln("                    \"drm\": {");
document.writeln("                        \"clearkey\": { \"keyId\":  \"70ce8ec0bda25664b32550e1d377a480\", \"key\": ");
document.writeln("                        \"2b91247bd45364eb6ab5d4c2c71caeb0\" }");
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

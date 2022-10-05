function htmll()
{
document.writeln("<script>");
document.writeln("    var playerInstance = jwplayer(\"player\");");
document.writeln("    playerInstance.setup({");
document.writeln("        playlist: [{");
document.writeln("            \"title\": \"Reproductor | Ultra Deportes\",");
document.writeln("            \"description\": \"Mirar FOX Sports Chile de manera gratuita\",");
document.writeln("            \"image\": \"https://img.youtube.com/vi/KNWQKa6EhAU/maxresdefault.jpg\",");
document.writeln("            \"sources\": [");
document.writeln("                {");
document.writeln("                    \"default\": false,");
document.writeln("                    \"type\": \"dash\",");
document.writeln("                    \"file\": 'https://1117-vos.dtvott.com/DASH/manifest.mpd',");
document.writeln("                    \"drm\": {");
document.writeln("                        \"clearkey\": { \"keyId\":  \"5804b7a24ca1303d8511b6d49278610c\", \"key\": ");
document.writeln("                        \"fc0a63fd4fb80fd67ad25646857082f5\" }");
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

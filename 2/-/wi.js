function htmll()
{
document.writeln("<script>");
document.writeln("var playerInstance=jwplayer(\"player\");");
document.writeln("playerInstance.setup({");
document.writeln("        playlist: [{");
document.writeln("            \"title\": \"Reproductor | Diex Sport\",");
document.writeln("            \"description\": \"Mirar Win Sports + de manera gratuita\",");
document.writeln("            \"image\": \"https://img.youtube.com/vi/ShU6BmNeBS4/maxresdefault.jpg\",");
document.writeln("            \"sources\": [");
document.writeln("                {");
document.writeln("          \"default\": false,");
document.writeln("          \"type\": \"dash\",");
document.writeln("          \"file\": \"https://dtvott-akaws.akamaized.net/live_1251/DASH/manifest.mpd\",");
document.writeln("          \"drm\": {");
document.writeln("            \"clearkey\": {\"keyId\": '34d62b22efc63f659eac5ba82289882d', \"key\": '696de7a82257ddb51ed3fdec04b6ec8b'}");
document.writeln("          },");
document.writeln("          \"label\": \"0\"");
document.writeln("        }");
document.writeln("      ]");
document.writeln("    }],");
document.writeln("    width: \"100%\",");
document.writeln("    height: \"100%\",");
document.writeln("    aspectratio: \"16:9\",");
document.writeln("    autostart: false,");
document.writeln("    cast: {},");
document.writeln("    sharing: {}");
document.writeln("});");
document.writeln("</script>");
}

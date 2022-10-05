function htmll()
{
document.writeln("<script>");
document.writeln("var playerInstance=jwplayer(\"player\");");
document.writeln("playerInstance.setup({");
document.writeln("        playlist: [{");
document.writeln("            \"title\": \"Reproductor | Diex Sport\",");
document.writeln("            \"description\": \"Mirar Win Sports de manera gratuita\",");
document.writeln("            \"image\": \"https://img.youtube.com/vi/1jX6yQfp9Og/maxresdefault.jpg\",");
document.writeln("            \"sources\": [");
document.writeln("                {");
document.writeln("          \"default\": false,");
document.writeln("          \"type\": \"dash\",");
document.writeln("          \"file\": \"https://1250-vos.dtvott.com/DASH/manifest.mpd\",");
document.writeln("          \"drm\": {");
document.writeln("            \"clearkey\": {\"keyId\": 'f195c02916303b2691090ca545933afb', \"key\": '774d7a8fae5e6bde902c5b33bc33ce01'}");
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

function htmll()
{
document.writeln("<script>");
document.writeln("var playerInstance=jwplayer(\"player\");");
document.writeln("playerInstance.setup({");
document.writeln("    playlist: [{");
document.writeln("            \"title\": \"Reproductor | Diex Sport\",");
document.writeln("            \"description\": \"Mirar ECDF de manera gratuita\",");
document.writeln("            \"image\": \"https://img.youtube.com/vi/tcB3mKUr76Q/maxresdefault.jpg\",");
document.writeln("            \"sources\": [");
document.writeln("        {");
document.writeln("          \"default\": false,");
document.writeln("          \"type\": \"dash\",");
document.writeln("          \"file\": \"https://dtvott-abc.akamaized.net/dash_live_1038/manifest.mpd\",");
document.writeln("          \"drm\": {");
document.writeln("            \"clearkey\": {\"key\": '0b6b8622989104f69b2db91630ed0eaf', \"keyId\": '6575e2cb849b581480ab260b70ccfab6'}");
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

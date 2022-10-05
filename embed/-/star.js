function htmll()
{
document.writeln("<script type=\"text/javascript\">");
document.writeln("var playerInstance=jwplayer(\"player\");");
document.writeln("playerInstance.setup({");
document.writeln("    playlist: [{");
document.writeln("    \"title\": \"Reproductor | Diex Sport\",");
document.writeln("    \"description\": \"Mirar Star+ de manera gratuita\",");
document.writeln("    \"image\": getIMG,");
document.writeln("      \"sources\": [");
document.writeln("        {");
document.writeln("          \"default\": false,");
document.writeln("          \"type\": \"dash\",");
document.writeln("          \"file\": getURL,");
document.writeln("          \"drm\": {");
document.writeln("            \"clearkey\": {\"keyId\": getKEY, \"key\": getKEY2}");
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
document.writeln("      ");
document.writeln("</script>");
}

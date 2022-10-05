function htmll()
{
document.writeln("<script type=\"text/javascript\">");
document.writeln("var playerInstance=jwplayer(\"player\");");
document.writeln("playerInstance.setup({");
document.writeln("    playlist: [{");
document.writeln("    \"title\": \"Reproductor | Diex Sport\",");
document.writeln("    \"description\": \"Mirar HBO MAX de manera gratuita\",");
document.writeln("    \"image\": \"https://img.youtube.com/vi/YFTwI7duV70/maxresdefault.jpg\",");
document.writeln("      \"sources\": [");
document.writeln("        {");
document.writeln("          \"default\": false,");
document.writeln("          \"type\": \"dash\",");
document.writeln("          \"file\": atob(getURL),");
document.writeln("          \"drm\": {");
document.writeln("            \"clearkey\": {\"keyId\": atob(getKEY), \"key\": atob(getKEY2)}");
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


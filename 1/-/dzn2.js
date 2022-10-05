function htmll()
{
document.writeln("<script>");
document.writeln("var playerInstance=jwplayer(\"player\");");
document.writeln("playerInstance.setup({");
document.writeln("    playlist: [{");
document.writeln("            \"title\": \"Reproductor | Diex Sport\",");
document.writeln("            \"description\": \"Mirar DAZN 2 DA de manera gratuita\",");
document.writeln("            \"image\": \"\",");
document.writeln("            \"sources\": [");
document.writeln("                {");
document.writeln("          \"default\": false,");
document.writeln("          \"type\": \"dash\",");
document.writeln("          \"file\": \"https://dce-fs-live-dazn-cdn.dazn.com/dashdrm/dazn-linear-018/stream.mpd\",");
document.writeln("          \"drm\": {");
document.writeln("            \"clearkey\": {\"key\": '0d6712bf2a84edcc93d001a9613f6fec', \"keyId\": 'cfb5e2b73bef4f3c878f25ab86a7451f'}");
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

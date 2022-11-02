function htmll()
{
document.writeln("<script>");
document.writeln("    var playerInstance = jwplayer(\"player\");");
document.writeln("    playerInstance.setup({");
document.writeln("        playlist: [{");
document.writeln("            \"title\": \"Reproductor | Diex TV\",");
document.writeln("            \"description\": \"Mirar Bolivisión de manera gratuita\",");
document.writeln("            \"image\": \"\",");
document.writeln("            \"sources\": [");
document.writeln("                {");
document.writeln("                    \"default\": false,");
document.writeln("                    \"type\": \"hls\",");
document.writeln("                    \"file\": 'https://d2byzrnrdb259r.cloudfront.net/hls/live.m3u8',");
document.writeln("                    \"label\": \"0\"");
document.writeln("                }");
document.writeln("            ]");
document.writeln("        }],");
document.writeln("        width: \"100%\",");
document.writeln("        height: \"100%\",");
document.writeln("        aspectratio: \"16:9\",");
document.writeln("        autostart: true,");
document.writeln("        cast: {},");
document.writeln("        sharing: {}");
document.writeln("    });");
document.writeln("</script>");
}

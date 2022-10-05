function htmll()
{
document.writeln("    <script>");
document.writeln("            var playerInstance=jwplayer(\"player\");");
document.writeln("            playerInstance.setup( {");
document.writeln("    ");
document.writeln("                playlist: [ {");
document.writeln("            \"title\": \"Reproductor | Diex Sport\",");
document.writeln("            \"description\": \"Mirar TUDN de manera gratuita\",");
document.writeln("            \"image\": \"https://img.youtube.com/vi/eTxT4jF0fEA/maxresdefault.jpg\",");
document.writeln("            \"sources\": [ {");
document.writeln("                        \"default\": false, \"file\": '//channel-tdn-cdn.blim.com/manifest.mpd', \"drm\": {");
document.writeln("                            \"widevine\": {");
document.writeln("                                \"headers\": [ {");
document.writeln("                                    \"name\": \"authorization\", \"value\": atob(auth)");
document.writeln("                                }");
document.writeln("                                ], \"url\": '//api.blim.com/license/widevine',");
document.writeln("                            }");
document.writeln("                        }");
document.writeln("                        , \"label\": \"0\", \"type\": \"mpd\"");
document.writeln("                    }");
document.writeln("                    ]");
document.writeln("                }");
document.writeln("                ], width: \"100%\",  height: \"100%\", aspectratio: \"16:9\", autostart: false, cast: {}");
document.writeln("                , sharing: {}");
document.writeln("            }");
document.writeln("            );");
document.writeln("            playerInstance.on('error', function(evt) {");
document.writeln("                console.log(\"error\");");
document.writeln("                location.href='poster.html';");
document.writeln("            }");
document.writeln("            );");
document.writeln("            playerInstance.on('setupError', function(evt) {");
document.writeln("                console.log(\"error\");");
document.writeln("                location.href='poster.html';");
document.writeln("            }");
document.writeln("            );");
document.writeln("    </script>");
}

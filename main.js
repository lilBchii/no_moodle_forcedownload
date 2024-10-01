console.log("Force dowload extension working");
for(l of document.getElementsByTagName("a")){l.href = l.href.replace("?forcedownload=1", "");}
console.log("Force dowload extension working");
for(link of document.getElementsByTagName("a")) (link.href.indexOf('pdf') != -1 || link.href.indexOf('resource') != -1 || link.href.indexOf('content') != -1) && (link.setAttribute("href", link.href.replace("?forcedownload=1", "")) || link.setAttribute("target", "_blank"));

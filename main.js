console.log("Force dowload extension working");
for(link of document.getElementsByTagName("a")){
    if (link.href.indexOf('pdf') != -1 || link.href.indexOf('resource') != -1 || link.href.indexOf('content') != -1) {
        link.target = "_blank";
        link.href = link.href.replace("?forcedownload=1", "");
    }
}

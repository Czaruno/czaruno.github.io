var siteLeft;
var siteTop;

var cbeImageCount=0;
var cbeImageObj = new Array();
var cbeImageName = new Array();
function cbeNewImage(imgName, imgUrl, imgWidth, imgHeight) {
  var imgObj;
  if (arguments.length == 4) imgObj = new Image(imgWidth,imgHeight);
  else imgObj = new Image();
  imgObj.src = imgUrl;
  imgObj.id = imgObj.name = imgName;
  cbeImageObj[cbeImageCount] = imgObj;
  cbeImageName[cbeImageCount++] = imgName;
  return imgObj;
}
function cbeSetImage(tagImg, preloadedImg) {
  if (initCalled) {
   var t, p;
   if (typeof(tagImg)=='string') t = cbeGetImageByName(tagImg);
   else t = tagImg;
   if (typeof(preloadedImg)=='string') p = cbeGetImageByName(preloadedImg);
   else p = preloadedImg;
   t.src = p.src;
  }
}
function cbeGetImageByName(imgName) {
  var i, j;
  if (document.images[imgName]) return document.images[imgName];
  if (is.nav4) {
    for (i = 0; i < cbeAll.length; i++) {
      if (cbeAll[i].ele.document) {
        for (j = 0; j < cbeAll[i].ele.document.images.length; j++) {
          if (imgName == cbeAll[i].ele.document.images[j].name) return cbeAll[i].ele.document.images[j];
        }
      }
    }
  }
  for (i = 0; i < cbeImageName.length; i++) {
    if (cbeImageName[i] == imgName) return cbeImageObj[i];
  }
  return null;
}
//site center function
function sitePosition() {
	siteLeft = (cbeInnerWidth()>783)?((cbeInnerWidth()-783)/2):0;
	siteTop = (cbeInnerHeight()>561)?((cbeInnerHeight()-561)/2):0;
	document.write('<style> ');
	document.write('#SiteDiv { position:absolute; left:'+siteLeft+'px; top:'+siteTop+'px; } ');
	document.write('</style>');
}
function getStyles() {
	stylee=(is.nav)? ((is.mac)? ((is.nav5up)? "_ie_mac" : "_ns_mac") : ((is.nav5up)? "_ie" : "_ns")) : ((is.mac)? ((is.ie4)? "_ie45_mac" : "_ie_mac") : "_ie");
	return '<LINK REL="stylesheet" TYPE="text/css" HREF="../common/styles'+stylee+'.css" TITLE="styles">';
}
var cbeUtilJsLoaded = true;

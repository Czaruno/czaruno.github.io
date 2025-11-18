<?
$newtext = "<tr bgcolor=\"#cccccc\"><td nowrap>".date("h:iA m.d.Y",time())."</td><td nowrap>".htmlspecialchars(stripslashes($name))."</td><td>".htmlspecialchars(stripslashes($comment))."</td></tr>\n";
if (!is_file ($refPage)) {
	// page doesn't exist, so create
	$fp = fopen($refPage, "w");
	fclose($fp);
}
$fp=fopen($refPage,"r+");
$content=fread($fp,filesize($refPage)); 
fseek($fp, 0);
fwrite($fp, $newtext.$content);
fclose($fp); 
print "<meta http-equiv=\"refresh\" content=\"0; URL=".$fullRef."#comment\">";
?>

<?php

	system('ipconfig/all');
	$a = ob_get_content();
	ob_clean();
	$mac = substr($a, (strpos($a,"Physical")+36),17);
	echo $mac;

?>
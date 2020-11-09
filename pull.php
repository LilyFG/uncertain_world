<?php 
$output1 = shell_exec('git remote -v'); 
$output2 = shell_exec('git pull origin master 2>&1'); 
echo "<pre>$output1</pre>";
echo "<pre>$output2</pre>";

?>

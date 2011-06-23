<?php
define ( 'PATH', dirname(__FILE__));

require_once('view.inc');

$view = view :: get_instance();
$view->name = 'DIEGO MARTIN RICHI';

$view->title = 'Ing. DIEGO MARTIN RICHI';

$view->sections = array(
    1 => array('title'=> 'Resumen', 'content' => 'Hola'),
    2 => array('title'=> 'Informacion Personal', 'content' => 'de nuevo hola')
);

//$view->base = '<base href="protected/views/psttt/html/default/"/>';
$basePath = "protected/views/psttt/html/default/";


$doc = new DOMDocument();
$doc->loadHTMLFile(PATH.'/html/default/index.html');
foreach ($doc->getElementsByTagName('script') as $elem) {
	if ($elem->hasAttribute('src')) {
    	$attr = $elem->getAttribute('src');
        $elem->removeAttribute('src');
        $elem->setAttribute('src', $basePath.$attr);
    }
}
foreach ($doc->getElementsByTagName('link') as $elem) {
	if ($elem->hasAttribute('href')) {
    	$attr = $elem->getAttribute('href');
        $elem->removeAttribute('href');
        $elem->setAttribute('href', $basePath.$attr);
    }
}
foreach ($doc->getElementsByTagName('img') as $elem) {
	if ($elem->hasAttribute('src')) {
    	$attr = $elem->getAttribute('src');
        $elem->removeAttribute('src');
        $elem->setAttribute('src', $basePath.$attr);
    }
}


$html = $doc ->saveHTML();
file_put_contents(PATH.'index2.html', $html);

$view->renderFile = '/default/index.html';

$view->render('default/index.html','index2.html','index.pst');
//$view->render('default/example1.html','example1.html','index.pst');

<?php
$this->breadcrumbs=array(
	'Message'=>array('message/index'),
	'HelloWorld',
);?>
<h1><?php echo $time; ?></h1>

<?php echo CHtml::link("Goodbye",array('message/goodbye'));?>
<br/>
<a href="/cv/index.php?r=message/goodbye">Goodbye old!</a>

<p>You may change the content of this page by modifying the file <tt><?php echo __FILE__; ?></tt>.</p>

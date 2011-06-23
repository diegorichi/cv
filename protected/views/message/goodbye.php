<?php
$this->breadcrumbs=array(
	'Message'=>array('message/index'),
	'Goodbye',
);?>
<h1><?php echo $time; ?></h1>
<h1>Goodbye!!!</h1>

<?php echo CHtml::link("Hello!",array('message/helloWorld'));?>


<p>You may change the content of this page by modifying the file <tt><?php echo __FILE__; ?></tt>.</p>

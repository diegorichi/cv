<?php
require_once ('Psttt.php') ;

class view
{
	/**
	 * private variable that holds the instance handle
	 */
	static private $instance = NULL;

	/**
	 * This is the only way to get a instantce of the class
	 */
	static function get_instance()
	{
		if (self :: $instance === NULL)
		{
			self :: $instance = new view(); //create class instance
		}
		return self :: $instance;
	}

	function set($array)
	{
		if ($array)
		foreach($array as $key => $value)
		{
			$this->$key = $value;
		}
	}
	/**
	 * Declare the constructor private to avoid object initialization, this is a singleton
	 */
	private function __construct()
	{
	}
	
	private function recompile($filename, $file, $template)
	{
			$psttt = new Psttt();
			$psttt->template_path = PATH . '/templates/';
			$psttt->html_path = PATH . '/html/';
			
			$psttt->load_html_template($filename);
			$psttt->load_template_file($template);//str_replace('.html','.pst',$filename));
			$psttt->save_compiled_template($file);
	} 

	/**
	 * Renders the specified file (html)
	 *
	 * @param string @filename
	 * $view->render('default.html','default/index.html','index.pst');
	 */
	function render($compiled = null, $filename = null, $template='index.pst' )
	{
		$file = PATH . '/compiled_templates/' . $compiled;
		
		if (
		 (max(@filemtime(PATH . '/html/'. $filename), @filemtime(PATH . '/templates/'. $template )) //str_replace('.html','.pst',$filename)))
		 > @filemtime($file) 
		 || !file_exists($file))
		 || PSTTT_DEBUG)
		{
			self :: recompile($filename, $file, $template);	
		}
		include_once($file);
	}
}

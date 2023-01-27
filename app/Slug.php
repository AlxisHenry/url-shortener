<?php

namespace App;

use App\Models\Short;
use Exception;

class Slug {
	
	private const CHARS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

	private string $_slug;
	
	public function __construct(
		private int $_length = 8,
		private bool $_unique = true
	)
	{
		if ($this->_length > 8) throw new Exception("Max length for slugs is 8 characters.");
		$slug = $this->randomize($this->_length);
		while (Short::find($slug)) {
			$slug = $this->randomize($this->_length);
		}
		$this->_slug = $slug;
	}
	
	public static function new(int $length = 8, bool $unique = true): string 
	{
		return (new Slug($length, $unique))->show();
	}

	private function randomize(int $length = 8): string
	{
		$slug = "";
		for ($i = 0; $i < $length; $i++) {
			$x = rand(0, strlen(self::CHARS) - 1);
			$slug .= self::CHARS[$x];
		}
		return $slug;
	}

	private function show(): string 
	{
		return $this->_slug;
	}

}

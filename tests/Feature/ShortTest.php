<?php

namespace Tests\Feature;

use App\Models\Short;
use App\Slug;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ShortTest extends TestCase
{

    use RefreshDatabase;
    
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_short_url_and_store_it_in_database()
    {
        $url = "https://www.google.fr";
        $slug = Slug::new();
        Short::create([
            "slug" => $slug,
            "url" => $url,
            "expires" => now()->addYear(10)
        ]);
        $short = Short::first();
        $this->assertInstanceOf(Short::class, $short, "The \$short variable is not an instance of \App\Models\Short.");
        $c = Short::where("slug", $slug)->first();
        $this->assertContainsOnlyInstancesOf(Short::class, [$short, $c], "The \$short or \$c variable is not an instance of \App\Models\Short.");
        $this->assertEquals($short, $c, "Instances \$c & \$short are not equals.");
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_short_url_redirection_is_working()
    {
        $url = "https://www.google.fr";
        $slug = Slug::new();
        Short::create([
            "slug" => $slug,
            "url" => $url,
            "expires" => now()->addYear(10)
        ]);
        // redirect()->away(Short::first()->slug);
        // $this->response 
    }

}       

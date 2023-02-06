<?php

namespace App\Http\Controllers;

use App\Models\Short;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $latestsShorts = Short::where([
            ["disabled", 0],
            ["deleted", null]
        ])->latest()->limit(5)->get();

        return view("pages.shortener");
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $short = Short::where("slug", $slug)->first() ?? null;
        if (!$short) abort('404');
        return redirect()->away(Short::where("slug", $slug)->first()->url);    
    }

}

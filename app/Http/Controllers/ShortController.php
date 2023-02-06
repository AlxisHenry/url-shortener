<?php

namespace App\Http\Controllers;

use App\Models\Short;
use App\Slug;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class ShortController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $perPage = 20;
        $shorts = Short::latest()->simplePaginate($perPage);
        $pagesCount = Short::count() / $perPage;
        return Inertia::render('Shorts', [
            "shorts" => $shorts,
            "paginate" => [
                "pagesCount" => $pagesCount
            ] 
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            "url" => "required|url"
        ]);

        Short::create([
            "slug" => Slug::new(),
            "url" => $request->url,
            "user_id" => Auth::user()->id,
            "expires" => now()->addYears(5)
        ]);

        return Redirect::route("shorts");
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Short $short)
    {
        return redirect()->away($short->url);
    }

    /**
     * Display the short of the current user
     * 
     * @return \Illuminate\Http\Response
     */
    public function user()
    {
        $shorts = Short::latest()->where("user_id", Auth::user()->id)->paginate(9);
        return Inertia::render('Profile/Shorts', [
            "shorts" => $shorts
        ]);
    }

}

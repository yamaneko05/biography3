<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index (Request $request) {
        return Post::with('user')->orderBy('created_at', 'desc')->get();
    }

    public function store (Request $request) {
        $post = new Post();
        $post->text = $request->text;
        $request->user()->posts()->save($post);

        return $post;
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index (Request $request) {
        return Post::with('user')
        ->withExists(['likes' => function ($query) use ($request) {
            $query->where('user_id', $request->user()->id);
        }])
        ->orderBy('created_at', 'desc')->get();
    }

    public function store (Request $request) {
        $post = new Post();
        $post->text = $request->text;
        $request->user()->posts()->save($post);

        return $post;
    }

    public function like (Request $request, Post $post) {
        $like = new Like();
        $like->user_id = $request->user()->id;
        $like->post_id = $post->id;
        $like->save();

        return response('a');
    }

    public function unlike (Request $request, Post $post) {
        $like = Like::where('user_id', $request->user()->id)
        ->where('post_id', $post->id)->first();
        $like->delete();

        return response();
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index (Request $request) {
        $parent_id = $request->parent_id;

        return Post::withExists(['likes' => function ($query) use ($request) {
            $query->where('user_id', $request->user()->id);
        }])
        ->withCount('likes')
        ->withCount('children')
        ->when(!$parent_id, function ($query) {
            $query->whereDoesntHave('parent');
        })
        ->when($parent_id, function ($query) use ($parent_id) {
            $query->where('parent_id', $parent_id);
        })
        ->orderBy('created_at', 'desc')->get();
    }

    public function show (Request $request, Post $post) {
        return Post::withExists(['likes' => function ($query) use ($request) {
            $query->where('user_id', $request->user()->id);
        }])
        ->withCount('likes')
        ->withCount('children')
        ->findOrfail($post->id);
    }

    public function store (Request $request) {
        $post = new Post();
        $post->text = $request->text;
        $post->parent_id = $request->parent_id;
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
        Like::where('user_id', $request->user()->id)
        ->where('post_id', $post->id)->delete();

        return response('');
    }
}

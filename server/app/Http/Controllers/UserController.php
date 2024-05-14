<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function update_icon_file(Request $request, User $user) {
        $request->validate([
            'file.0' => ['required', 'image']
        ]);

        $user->icon_file = $request->file('file')[0]->store('users_icon', 'public');
        $user->save();
        
        return response('');
    }
}

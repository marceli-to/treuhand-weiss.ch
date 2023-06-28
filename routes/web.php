<?php

use Illuminate\Support\Facades\Route;
use Statamic\Facades\Entry;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\FormController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('/form/contact', [FormController::class, 'store'])->name('form.contact.store');

// Route::statamic('example', 'example-view', [
//    'title' => 'Example'
// ]);
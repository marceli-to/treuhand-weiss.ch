<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Statamic\Facades\Entry;
use Statamic\Fields\Value;
use App\Http\Requests\ContactFormStoreRequest;
use Illuminate\Support\Facades\Notification;
use App\Notifications\ContactFormOwnerEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class FormController extends Controller
{
  /**
   * @param ContactFormStoreRequest $request 
   * @return \Illuminate\Http\Response
   */
  public function store(ContactFormStoreRequest $request)
  { 
    $title = $request->input('firstname') . ' ' . $request->input('name') . ', ' . $request->input('email');
    $contactFromData = Entry::make()
    ->collection('contactform')
    ->slug($title)
    ->data(
      array_merge(
        [
          'title' => $title,
        ], 
        $request->all()
      )
    );
    
    $contactFromData->save();
    // Notification::route('mail', env('MAIL_TO'))->notify(new ContactFormOwnerEmail($contactFromData));
    return response()->json($contactFromData->id, 201);
  }
}

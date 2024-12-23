<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;

class FeedPostRequest extends FormRequest
{


  public function authorize(): bool
  {
    return true;
  }
  // Here are the rules to validate the post content
  public function rules(): array
  {
    return
      [
        "postContent" => 'nullable',
        "postImage" => 'nullable|image|mimes:jpeg,png,jpg,gif,svg'
      ];
  }
}

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
                [
                    'title' => ['required'],
                    'description' => ['required'],
                    'created_by' => ['required']
                ],
                [
                    'title.required' => 'Enter a title!',
                    'description.required' => 'Tell us something about your post!',
                    'created_by.required' => 'Author name is required!'
                ]
        ];
    }
}

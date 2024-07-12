<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePersonnelRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'rank' => 'required|string|max:255',
            'serviceNo' => 'required|string|max:255',
            'nextOfKin' => 'required|string|max:255',
            'unit' => 'required|string|max:255',
            'yearOfPayment' => 'required|string|max:255',
            'dateOfDeath' => 'required|date',
            'remarksStatus' => 'required|string|max:255',
        ];
    }
}

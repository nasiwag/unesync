<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ItemRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'details'           => 'nullable',
            'variants'          => 'nullable|array',
            'stock'             => 'nullable|array',
            'track_quantity'    => 'nullable|boolean',
            'track_weight'      => 'nullable|boolean',
            'has_variants'      => 'nullable|boolean',
            'has_serials'       => 'nullable|boolean',
            'alert_quantity'    => 'nullable|numeric',
            'rack_location'     => 'nullable|string',
            'unit_id'           => 'nullable|exists:units,id',
            'child_category_id' => 'nullable|exists:categories,id',
            'photo'             => 'nullable|image|mimes:png,jpg,jpeg',
            'sku'               => 'nullable|max:50|unique:items,sku,' . optional($this->route('item'))->id,

            'name'        => 'required|string',
            'symbology'   => 'required|string',
            'category_id' => 'required|exists:categories,id',
            'code'        => 'required|max:50|unique:items,code,' . optional($this->route('item'))->id,

            'variants.*.option'   => 'array',
            'variants.*.name'     => 'required_if:has_variants,true',
            'variants.*.option.*' => 'required_if:has_variants,true',
        ];
    }

    public function withValidator($validator)
    {
        $validator->setImplicitAttributesFormatter(function ($attribute) {
            $attributes = explode('.', $attribute);
            if ('variants' == $attributes[0]) {
                if ($attributes[2]) {
                    return 'variant ' . ((int) $attributes[1] + 1) . ' ' . $attributes[2] . ' ' . (isset($attributes[3]) ? ((int) $attributes[3] + 1) : '');
                }
                return 'variant ' . ((int) $attributes[1] + 1);
            } elseif ('attachments' == $attributes[0]) {
                return 'attachments ' . ((int) $attributes[1] + 1);
            }
            return $attributes;
        });
    }
}

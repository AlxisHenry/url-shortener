<?php

namespace Database\Factories;

use App\Models\User;
use App\Slug;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Short>
 */
class ShortFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "slug" => Slug::new(),
            "url" => fake()->url(),
            "user_id" => User::inRandomOrder()->first()->id,
            "expires" => now()->addYears(10)
        ];
    }
}

<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Slug;
use App\Models\Short;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(10)->create();

        User::factory()->create([
            "name" => "alexis",
            "email" => "a@l.com"
        ]);

        $shortCount = (int)$this->command->ask('How many short urls would you like?', 100);

        if ($shortCount < 1) {
            $shortCount = 100;
            $this->command->warn("You must create at least 1 short url. 100 short urls will be created.\n");
        }

        $this->command->getOutput()->progressStart($shortCount);

        for ($i = 0; $i < $shortCount; $i++) {
            Short::factory()->create();
            $this->command->getOutput()->progressAdvance();
        }
        
        $this->command->getOutput()->progressFinish();
    }
}

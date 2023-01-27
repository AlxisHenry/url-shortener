<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shorts', function (Blueprint $table) {
            $table->id();
            $table->string("slug", 8)
                ->unique()
                ->index();
            $table->string("url");
            $table->foreignId("user_id")
                ->nullable()
                ->default(null)
                ->constrained("users")
                ->onDelete("set null");
            $table->boolean("disabled")
                ->default(false);
            $table->timestamp("expires")
                ->nullable()
                ->default(null);
            $table->timestamp("deleted")
                ->nullable()
                ->default(null);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shorts');
    }
};

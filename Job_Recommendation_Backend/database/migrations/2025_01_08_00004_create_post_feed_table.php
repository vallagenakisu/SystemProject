<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('post_feed', function (Blueprint $table) {
            // Defining the attributes for the table
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->text('postContent')->nullable();
            $table->string('postImage')->nullable();
            $table->timestamps();

            // Adding foreign key constraints to this table

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('post_feed');
    }
};

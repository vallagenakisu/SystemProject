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
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('title');
            $table->string('description')->nullable();
            $table->string('due_date')->format('Y-m-d')->nullable();
            $table->boolean('status')->nullable();
            $table->unsignedBigInteger('assigned_by');
            $table->unsignedBigInteger('assigned_to');
            // Add parent child relationship
            $table->unsignedBigInteger('parent_id')->nullable();

            //foreign key
            $table->foreign('assigned_by')->references('id')->on('users');
            $table->foreign('assigned_to')->references('id')->on('users');
            $table->foreign('parent_id')->references('id')->on('tasks')->onDelete('cascade'); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};

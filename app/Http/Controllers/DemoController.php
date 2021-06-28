<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DemoController extends Controller
{
    //

    public function checkDatabaseConnectivity()
    {
        try {
            DB::connection()->getPdo();
            if (DB::connection()->getDatabaseName()) {
                return ["message"=>"database connected ".DB::connection()->getDatabaseName()];
                // echo "Yes! Successfully connected to the DB: " . DB::connection()->getDatabaseName();
            } else {
                return ["message"=> "Could not find the database. Please check your configuration."];
                // die("Could not find the database. Please check your configuration.");
            }
        } catch (Exception $e) {
            return ["message" => "Could not find the database. Please check your configuration.".$e];
            // die("Could not open connection to database server.  Please check your configuration.");
        }
    }
}

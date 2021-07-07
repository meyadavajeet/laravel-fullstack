<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Laravel\Ui\Presets\React;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //get all contact
        $contacts = Contact::all();
        // return ["status" => 200, "contact" => $contacts];
        return response()->json(["status" => 200, "contacts" => $contacts]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //first way of storing data in database table
        // $contact = new Contact();
        // $contact->fullName = $request->fullName;
        // $contact->email = $request->email;
        // $contact->phone = $request->phone;
        // $result = $contact->save();

        //Second way of storing data in database table
        $contact = Contact::create([
            'fullName' => $request->fullName,
            'email' => $request->email,
            'phone' => $request->phone
        ]);
        if ($contact)
            return ["status" => 200, "response" => "Data Added Successfully!!!"];
        else
            return ["status" => 422, "response" => "Operation Failed !!!"];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $contact = Contact::find($id);
        return response()->json(['status' => 200, 'contact' => $contact]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $contact = Contact::find($id);
        return response()->json(['status' => 200, 'contact' => $contact]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $contact = Contact::find($id);
        $contact->fullName = $request->fullName;
        $contact->email = $request->email;
        $contact->phone = $request->phone;
        if ($contact->save())
            return ["status" => 200, "response" => "Data Updated Successfully!!!"];
        else
            return ["status" => 422, "response" => "Operation Failed !!!"];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $contact = Contact::find($id);
        if ($contact->delete())
            return response()->json(['status' => 200, 'response' => 'Data Deleted Successfully!!!']);
        else
            return ["status" => 401, "response" => "Operation Failed !!!"];
    }

    public function getCSRFToken(Request $request)
    {
        return csrf_token();
    }
}

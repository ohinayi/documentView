<?php

namespace App\Http\Controllers;

use App\Models\Personnel;
use App\Http\Requests\StorePersonnelRequest;
use App\Http\Requests\UpdatePersonnelRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PersonnelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Personnel::query();

        if ($request->has('sort')) {
            $sortField = $request->input('sort');
            $sortDirection = $request->input('direction', 'asc');
            $query->orderBy($sortField, $sortDirection);
        }

        $personnels = $query->paginate(10);

        return Inertia::render('Personnel/Index', [
            'personnels' => $personnels,
            'sort' => $request->input('sort'),
            'direction' => $request->input('direction', 'asc'),
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Personnel/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePersonnelRequest $request)
    {
        $validated = $request->validated();
        Personnel::create($validated);

        return redirect()->route('personnels.index')->with('success', 'Personnel created successfully.');

    }

    /**
     * Display the specified resource.
     */
    public function show(Personnel $personnel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Personnel $personnel)
    {
        return Inertia::render('Personnel/Form', [
            'personnel' => $personnel,
            'isEditing' => true
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePersonnelRequest $request, Personnel $personnel)
    {
        $validated = $request->validated();
        $personnel->update($validated);

        return redirect()->route('personnels.index')->with('success', 'Personnel updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Personnel $personnel)
    {
        $personnel->delete();
        return redirect()->route('personnels.index')->with('success', 'Personnel deleted successfully.');
    }
}

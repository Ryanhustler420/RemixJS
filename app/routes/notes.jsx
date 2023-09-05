import { json, redirect } from '@remix-run/node';
import { useLoaderData, Link, useRouteError, isRouteErrorResponse } from '@remix-run/react';

import { getStoredNotes, storeNotes } from '~/data/notes';
import NewNote, { links as newNoteLinks } from '~/components/NewNote';
import NoteList, { links as nodeListLinks } from '~/components/NoteList';

export default function NotesPage() {
    const notes = useLoaderData();
    return (
        <main>
            <NewNote />
            <NoteList notes={notes} />
        </main>
    )
}

export async function loader() {
    const notes = await getStoredNotes();
    if (!notes || notes.length === 0) {
        // throw new Response();
        throw json({message: "This is a test error."}, {
            status: 404,
            statusText: 'Not found'
        });
    }
    return notes; // raw data
    // return new Response(JSON.stringify(notes), { headers: { 'Content-Type': 'application/json' } });
    // return json(notes); // raw data
}

export async function action({ request }) {
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData);
    
    // added validation
    if (noteData.title.trim().length < 5) {
        return { message: 'Invalid title - must be atleast 5 character long' };
    }

    const existingNotes = await getStoredNotes();
    noteData.id = new Date().toISOString();
    const updatedNotes = existingNotes.concat(noteData);
    await storeNotes(updatedNotes);
    return redirect('/notes');
}

export function links() {
    return [...newNoteLinks(), ...nodeListLinks()]
}

export function meta() {
    return [{
        title: "All Notes",
        description: 'Manager your notes with ease.'
    }];
}

export function ErrorBoundary() {
    const error = useRouteError();

    // when true, this is what used to go to `CatchBoundary`
    if (isRouteErrorResponse(error)) {
        return (
            <main>
                <NewNote />
                <p className='info-message'>{error?.data?.message}</p>
            </main>
        );
    }

    return (
        <main className="error">
            <h1>Notes not found</h1>
            <p>{error?.message}</p>
            <p>Back to <Link to="/">safety</Link></p>
        </main>
    )
}
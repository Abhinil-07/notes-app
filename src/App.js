import NotesList from './Components/NotesList';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useEffect } from 'react';
import Search from './Components/Search';
import Header from './Components/Header';


function App() {
  const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
  const [notes, setNotes] = useState(savedNotes || []);
  const [searchText, setSearchText] = useState('');
  const [mode, setMode] = useState('light');

  


  useEffect(() => {
    window.localStorage.setItem( 'react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const data = window.localStorage.getItem('react-notes-app-data');
    if ( data !== null ) setNotes(JSON.parse(data));
  }, []);


  // useEffect(() => {
  //   const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
  //   console.log(savedNotes)
  //   console.log( JSON.parse(localStorage.getItem('react-notes-app-data')))

  //   if (savedNotes){
  //     setNotes(savedNotes)
  //   }
  // }, [])
  


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      text: text,
      date: date.toLocaleDateString(),
      key: nanoid()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }


  const deleted = (key) => {
    const newNotes = notes.filter((note) => note.key !== key);
    setNotes(newNotes);
  }

  return (
    <>

      <div className='container'>
        <Header toggleMode={toggleMode} mode={mode} />
        <Search handleSearchNote={setSearchText} />
        {/* {console.log(searchText)} */}
        <NotesList
          notes={notes.filter((note) => note.text.includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleted} />
      </div>
    </>

  );
}

export default App;

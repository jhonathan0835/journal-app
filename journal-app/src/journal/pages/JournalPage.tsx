import JournalLayout from "../layout/JournalLayout"
import NoteView from "../views/NoteView"
import NothingSelectedView from "../views/NothingSelectedView"

const JournalPage = () => {
  return (
    <JournalLayout>
      
      {/* Views */}
      {/* <NothingSelectedView /> */}
        <NoteView />
      
    </JournalLayout>
  )
}

export default JournalPage

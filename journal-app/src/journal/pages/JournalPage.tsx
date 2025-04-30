import JournalLayout from "../layout/JournalLayout"
import NoteView from "../views/NoteView"

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

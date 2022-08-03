import { LABEL } from "../../app/constants";
import AppButton from "../../component/AppButton";
import AppFormInput from "../../component/AppFormInput";

const StudentBookView = (props) => {
  const { handleSubmit, books, newBookValue, handleNewBookChange, student } =
    props;
  return (
    <>
      <div>
        <h2> Book </h2>
        <div> {student.name} </div>
        <AppFormInput
          id="book"
          label={LABEL["Book.label"].value}
          value={newBookValue}
          onValueChange={handleNewBookChange}
        />
        <AppButton
          handleClick={handleSubmit}
          label={LABEL["studentBook.submit"].value}
        />
        <ul>
          {console.log(books)}

          {books.map((book) => (
            <li key={book}> {book} </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default StudentBookView;

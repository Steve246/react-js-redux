import { LABEL } from "../../app/constants";
import AppButton from "../../component/AppButton";
import AppFormInput from "../../component/AppFormInput";

const StudentBookView = (props) => {
  const {
    handleSubmit,
    books,
    newBookValue,
    handleNewBookChange,
    student,
    handlePostBook,
    isLoading,
  } = props;
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
        {isLoading && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 110,
              height: "100%",
              width: "100%",
              // backgroundColor: "whitesmoke",
              // textAlign: "center",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(10,10,10,0.5)",
            }}
          >
            {" "}
            Loading...{" "}
          </div>
        )}

        <AppButton label="post-book" handleClick={handlePostBook} />
      </div>
    </>
  );
};

export default StudentBookView;

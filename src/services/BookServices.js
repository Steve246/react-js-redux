const BookService = () => {
  const postBook = (newBook) => {
    // logic bohongan call API

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Post New Book", newBook);
        resolve("success");
      }, 1000);
    });
  };

  return {
    postBook,
  };
};

export default BookService;

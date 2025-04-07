


const BookItem = ({ book }) => {
    const { title, authors, imageLinks, description, previewLink, infoLink } = book.volumeInfo;

    return (
        <div className="card">
            {imageLinks && (
                <img src={imageLinks.thumbnail} alt={title} className="card-img-top" />
            )}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {authors && <p className="card-text">AUTHORS : {authors.join(", ")}</p>}
                {description && (
                    <p className="card-text">
                        Description: {description.substring(0, 100)}...
                    </p>
                )}
                {
                    <div className="d-flex justify-content-between">
                        <a href={infoLink} className="btn btn-warning" target="_blank" rel="noopener noreferrer">
                            View More
                        </a>
                        <a href={previewLink} className="btn btn-info" target="_blank" rel="noopener noreferrer">
                            Preview
                        </a></div>
                }
            </div>
        </div>
    );
};

export default BookItem;

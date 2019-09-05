// Create an object constructor for movies that includes properties for title,
// director, writer, release date, and motion picture rating. Include a trailer() method
// that prints “[movie name], written by [writer] and directed by [director],
// will be released on [release date].” Include an audience() method that
// prints “For audiences above the age of 16.” if the rating is R, “For audiences
// above the age of 12.” if the rating is PG-13, “Parental guidance suggested” if
// the rating is PG, and “For general audiences.” if the rating is G.

function Movies (title,director,writer,releaseDate,motionPictureRating) {
    this.title= title;
    this.director=director;
    this.writer=writer;
    this.releaseDate=releaseDate;
    this.motionPictureRating=motionPictureRating;

    this.trailer = function () {
        return `${this.title}, written by ${this.writer}, directed by ${this.director}, and will be released on ${this.releaseDate}`
    }

    this.audience = function () {
        switch(this.motionPictureRating) {
            case 'R':
                return 'For audiences above the age of 16.'
            break;
            case 'PG-13':
                return 'For audiences above the age of 12.'
            break;
            case 'PG':
                return 'Parental guidance suggested.'
            break;
            case 'G':
                return 'For general audiences.'
            break;
            default:
                'Please select a movie title'
        }
    }
}

const getOut = new Movies('Get Out','Jordan Peele', 'Jordan Peele', 2017, 'R');
console.log(getOut.trailer());
console.log(getOut.audience());

const spiderman = new Movies('Spider-Man 2', 'Sam Raimi','Stan Lee', 2004, 'PG-13');
console.log(spiderman.trailer());
console.log(spiderman.audience());

const coco = new Movies('Coco', 'Lee Unkrich', 'Lee Unkrich', 2017, 'PG')
console.log(coco.trailer());
console.log(coco.audience());

const findingNemo = new Movies('Finding Nemo', 'Andrew Stanton', 'Andrew Stanton', 2003, 'G')
console.log(findingNemo.trailer());
console.log(findingNemo.audience());
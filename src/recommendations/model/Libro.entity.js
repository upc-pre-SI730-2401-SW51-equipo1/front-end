export class Libro {
    constructor(id, title, price, writer, image, recommendation, gender) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.writer = writer;
        this.image = image;
        this.recommendation = recommendation;
        this.gender = gender;
    }

    static fromDisplayableLibro(displayableLibro) {
        return new Libro(
            displayableLibro.id,
            displayableLibro.title,
            displayableLibro.price,
            displayableLibro.writer,
            displayableLibro.image,
            displayableLibro.recommendation === true ? 'Recommended' : 'Not Recommended',
            displayableLibro.gender
        );
    }

    static toDisplayableRecommendation(libro) {
        return {
            id: libro.id,
            title: libro.title,
            price: libro.price,
            writer: libro.writer,
            image: libro.image,
            recommendation: libro.recommendation === 'Recommended',
            gender: libro.gender
        };
    }
}
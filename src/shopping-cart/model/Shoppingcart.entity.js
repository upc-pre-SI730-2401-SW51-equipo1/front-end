export class Shoppingcart{
    constructor(id, title, pricetotal) {
        this.id = id;
        this.title = title;
        this.pricetotal = pricetotal;

    }

    static fromDisplayableCart(displayableCart) {
        return new Shoppingcart(
            displayableCart.id,
            displayableCart.title,
            displayableCart.pricetotal,

        );
    }

    static toDisplayableCart(shoppingcart) {
        return {
            id: shoppingcart.id,
            title: shoppingcart.title,
            pricetotal: shoppingcart.pricetotal,


        };
    }
}
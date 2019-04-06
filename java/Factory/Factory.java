public class Factory {

    public Shoe getShoe(String type) {
        if (type == "Nike") {
            return new OffWhite();
        } else if (type == "Adidas") {
            return new Yeezy();
        }
        System.out.println("Invalid type");
        return null;
    }
}
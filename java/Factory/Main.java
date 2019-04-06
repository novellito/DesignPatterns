public class Main {
    public static void main(String[] args) {

        Factory f = new Factory();

        Shoe jordan = f.getShoe("Nike");
        jordan.flex();

        Shoe ye = f.getShoe("Adidas");
        ye.flex();

    }
}
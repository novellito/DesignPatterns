public class Main {
    public static void main(String[] args) {

        ShopBuilder roundTwoBuilder = new ResellShopBuilder();
        ShopOwner wotherspoon = new ShopOwner(roundTwoBuilder);

        wotherspoon.createShop();
        Shop roundTwo = wotherspoon.getShop();

        System.out.println("Round two was built!: " + roundTwo);

    }
}
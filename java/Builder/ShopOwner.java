public class ShopOwner {

    private ShopBuilder sb;

    public ShopOwner(ShopBuilder sb) {
        this.sb = sb;
    }

    public void createShop() {
        this.sb.buildWalls();
        this.sb.buildFurniture();
        this.sb.buildShoeRacks();
        this.sb.buildClothesRacks();
    }

    public Shop getShop() {
        return this.sb.getShop();
    }
}
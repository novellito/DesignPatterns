public class ResellShopBuilder implements ShopBuilder {
    private Shop shop;

    public ResellShopBuilder() {
        this.shop = new Shop();
    }

    @Override
    public void buildWalls() {
        shop.setWalls("Brick Walls");
    }

    @Override
    public void buildFurniture() {
        shop.setFurniture("hip furniture");
    }

    @Override
    public void buildShoeRacks() {
        shop.setShoeRacks("setting shoe racks");
    }

    @Override
    public void buildClothesRacks() {
        shop.setClothesRacks("building clothes racks");
    }

    @Override
    public Shop getShop() {
        return this.shop;
    }

}
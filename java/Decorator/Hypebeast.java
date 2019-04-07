public class Hypebeast extends ModelDecorator {

    public Hypebeast(Model m) {
        super(m);
    }

    @Override
    public void setOutfit() {
        System.out.println("Setting a super fire fit!");
    }
}
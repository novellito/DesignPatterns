public class ModelDecorator implements Model {

    protected Model model;

    public ModelDecorator(Model m) {
        this.model = m;
    }

    @Override
    public void setOutfit() {
        System.out.println("Setting a classy fit!");
    }

}
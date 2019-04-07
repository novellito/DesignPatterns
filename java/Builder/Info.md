# Builder Pattern

The goal of the builder pattern is to break down the creation process of a complex object. In doing so the final product can be extensible and constructed in various ways.

In this pattern there are generally 3 components (potentially 4):

Product - The final object to be built by the pattern. It typically contains the setter methods. In the example the final product is the Shop object.

Builder - The builder can be separated between the builder or concrete builder object (the 4th component). In the case that a the two are separated, the builder is simply an interface for the concrete builder.

Director - The class that is responsible for putting everything together. Its constructor takes in a builer object and uses that to create the product.

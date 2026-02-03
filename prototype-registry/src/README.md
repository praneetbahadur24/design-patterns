# Prototype

- Creates new object by cloning an existing object instead of creating new one from scratch.

# Why it is required?

- Imagine you have complex object with many field, default values and expensive setup. Instead of creating object every time from scrach we can create a copy of existing object.

# Where SHOULD we use it?

- Object creating is expensive
- Many object have similar set of configuration
- To avoid large constructor
- To get runtime object template.

# Registry

- It is a centralize stotage where object, classes or prototypes are stores and retrive as a key.

# Why it is required?

- To avoid tight coupling
- To acheive OCP(long if/else or switch).
- Hard to add new type.

# Where SHOULD we use it?

- Many object type exist.
- Object can be accessed by name or key
- In case of plugin-style architecture
- You want runtime extensibility

# Prototype + Registry (Very Common Combo)

- This is where patterns shine.

# Why combine them?

- Registry stores prototypes
- Prototype creates new instances

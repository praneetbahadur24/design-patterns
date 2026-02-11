# Adapter Patter

- Adapter is a structural design pattern
- It allow two different incompatible object to work together.

# Why adapter pattern is required?

- You want to use existing class
  - But it's interface doesn't match at your system expect.
- You integrate third party or lecy code
  - You can't modified that code but you need it to fit in your system
- You follow Open/Close Principle
  - You avoid modifying existing working code.

# Where SHOULD you use Adapter pattern?

- Integrating third party library
  - Payment gateway
  - Logging framework
  - External APIs
- Working with legacy System
  - Old database module
  - Old service class

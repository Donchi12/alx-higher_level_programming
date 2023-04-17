# Python - Almost a circle

The three classes involved utilizing the following Python tools:
* Import
* Exceptions
* Private attributes
* Getter/setter
* Class/static methods
* Inheritance
* File I/O
* `args`/`kwargs`
* JSON and CSV serialization/deserialization
* Unittesting

## Tests :heavy_check_mark:

* [tests/test_models](./tests/test_models): Folder containing the following independently-developed test files:
  * [test_base.py](./tests/test_models/test_base.py)
  * [test_rectangle.py](./tests/test_models/test_rectangle.py)
  * [test_square.py](./tests/test_models/test_square.py)

## Classes

  * `**kwargs` is expected to be a double pointer to a dictionary of new key/value attributes to update the `Rectangle` with.
  * `**kwargs` is skipped if `*args` exists.
* Public method `def to_dictionary(self):` that returns the dictionary representation of a `Rectangle` instance.

### Square

Represents a square. Inherits from `Rectangle` with:


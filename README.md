# MongoDB $inc Operator Unexpected Behavior

This repository demonstrates a common error when using the `$inc` operator in MongoDB to decrement a counter field.  Incorrect usage can lead to unexpected results or data corruption if not handled correctly.

## Bug Description
The provided code snippet shows an improper use of the `$inc` operator with a negative value. While it seems intuitive,  it can lead to issues if the field doesn't exist or contains a non-numeric value. The solution addresses potential errors, ensuring that the field is initialized to 0 before decrementing and handles non-numeric values gracefully.
# Nth node from end

We are using the two-pointer approach.
This method utilizes two pointers, slow and fast.

- Move fast n nodes ahead from the head.
- Then, iterate both slow and fast together. By the time fast reaches the end (null pointer), slow will be pointing to the nth element from the end.
#!/usr/bin/env python
print(r"Do '\' something")
A = [[1,2,3,4,5,6,7,8,9,10],["1","2","3","4","5"]]

print(A[1][:])

while True:
    word = input('Please enter a word: ')

    if not word: break
    # do something with the word:
    print('The word was ', word)

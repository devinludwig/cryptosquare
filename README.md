# _Cryptosquare Encoder_

#### _A page to convert text to Cryptosquare code., 10-27-2016_

#### By _**Devin Ludwig and Jared Alford**_

## Description

_This page has an input for text and outputs encoded equivalent._

## Specs:

* _The program creates an array of all characters and spaces in the inputted text.
  Example Input: This an example.
  Example Output: [T,h,i,s, ,a,n, ,e,x,a,m,p,l,e,.]_
* _The program removes all spaces and special characters from the array.
Example Input: [T,h,i,s, ,a,n, ,e,x,a,m,p,l,e,.]
Example Output: [T,h,i,s,a,n,e,x,a,m,p,l,e]_
* _The program downcases all letters in the array.
Example Input: [T,h,i,s,a,n,e,x,a,m,p,l,e]
Example Output: [t,h,i,s,a,n,e,x,a,m,p,l,e]_
* _The program counts the number of letters within the array.
Example Input: [t,h,i,s,a,n,e,x,a,m,p,l,e]
Example Output: 13_
* _The program finds the smallest perfect square that is larger than the letter count of the array.
Example Input: [t,h,i,s,a,n,e,x,a,m,p,l,e]
Example Output: 16_
* _The program starts at the first letter and outputs every nth letter, where n is the square root of the perfect square, until it reaches the last letter.
Example Input: [t,h,i,s,a,n,e,x,a,m,p,l,e]
Example Output: taa_
* _The program continues this pattern, starting from the second letter, after it has reached the end of the array in the last spec.
Example Input: [t,h,i,s,a,n,e,x,a,m,p,l,e]
Example Output: hnm_
* _The program outputs a number of X's equal to the digit at the tens place if it is from 1 to 3.
Example Input: 30
Example Output: XXX_
* _The program outputs a number of X's equal to the digit at the tens place minus 5 if that digit is from 5 to 8.
Example Input: 70
Example Output: LXX_
* _The program outputs XC if the digit at the tens place is 9.
Example Input: 90
Example Output: XC_
* _The program outputs XL if the digit at the tens place is 4.
Example Input: 40
Example Output: XL_
* _The program outputs a V if the ones place contains a digit from 5 to 8.
Example Input: 7
Example Output: V_
* _The program outputs a number of I's equal to the digit at the ones place if it is from 1 to 3.
Example Input: 3
Example Output: III_
* _The program outputs a number of I's equal to the digit at the ones place minus 5 if that digit is from 5 to 8.
Example Input: 7
Example Output: VII_
* _The program outputs IX if the digit at the ones place is 9.
Example Input: 9
Example Output: IX_
* _The program outputs IV if the digit at the ones place is 4.
Example Input: 4
Example Output: IV_




Copyright (c) 2016 **_{List of contributors or company name}_**

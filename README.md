# Introduction

This is the second homework in the *NoSQL Databases and Advanced Programming* course which I participated in during the 2020/21 summer term. The *cwiczenia2.json* file contains data that was provided with the instructions. You can load data using the following command:

```shell
mongoimport --file cwiczenia2.json --db nbd --collection people--jsonArray
```



# Solution

Due to a strict naming convention that was a part of grading requirements directories and files are named in Polish:

* *czesc* = part
* *wyniki* = results
* *zapytanie* = query

## Part 1

The exercises in this part are dedicated to verifying general query writing skills (CRUD):

* query no. 2: Get one person from the database.
* query no. 3: Get one Chinese woman.
* query no. 4: Get all males of German origin.
* query no. 5: Get all people with weight between 68 (inclusive) and 71.5 (exclusive).
* query no. 6: Get names, surnames and cities of people who were born in the 21st century.
* query no. 7: Insert an entry with information on yourself.
* query no. 8: Delete all entries with people who are taller than 190 cm.
* query no. 9: Update all entries: *Moscow* is now called *Moskwa*.
* query no. 10: Update all *Antonio* entries: add a hobby called *pingpong*.
* query no. 11: Remove the *email* field from all entries where *Editor* is the job.



## Part 2

This part focuses on using the map-reduce framework and (if applicable) the aggregation framework to answer the following questions:

* question no. 1: What is the average weight and height by sex?
* question no. 2: What is the total sum of all deposits by currency?

* question no. 3: What are the jobs people do?
* question no. 4: What is the average, minimum, and maximum BMI by nationality?
* question no. 5: What is the average and the total sum of deposits of Polish women by currency?
